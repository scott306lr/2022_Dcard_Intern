import { StarIcon } from '@heroicons/react/outline';
import { Endpoints } from '@octokit/types';
import Link from 'next/link';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

type listRepoInfoResponse =
  Endpoints['GET /users/{username}/repos']['response']['data'];

type Props = {
  data: listRepoInfoResponse;
  nextPage: () => void;
  hasMore: boolean;
  status: String;
};

export default function ReposList({ data, nextPage, hasMore, status }: Props) {
  const endMessage = () => {
    if (status === 'ok') {
      return (
        <h4 className="flex-center text-gray-500">You reached the end!</h4>
      );
    } else if (status === '403') {
      return (
        <h4 className="flex-center text-gray-500">
          API Limit Exceeded! Try Again Later!
        </h4>
      );
    } else {
      return <h4 className="flex-center text-gray-500">Error!</h4>;
    }
  };
  return (
    <ul
      id="scrollableUl"
      className="h-full w-full scrollbar-hide overflow-scroll border border-hov_color text-gray-800 rounded-md bg-white"
    >
      <InfiniteScroll
        dataLength={data.length}
        scrollThreshold={0.8}
        next={nextPage}
        hasMore={hasMore}
        loader={<h4 className="flex-center text-gray-500">Loading...</h4>}
        endMessage={endMessage()}
        scrollableTarget="scrollableUl"
      >
        {data.map((repoInfo, idx) => {
          return (
            <li key={idx}>
              <Link
                  href={`/users/${repoInfo?.owner?.login}/repos/${repoInfo?.name}`}
              >
                <div className="card border border-gray-300">
                  <div className="flex">
                    <h1
                      className="flex-grow text-left inline truncate"
                      id="repo-name"
                    >
                      {repoInfo?.name}
                    </h1>
                    <span className="flex items-center" id="star-count">
                      <StarIcon className="w-5 h-5" />
                      <p>{repoInfo?.stargazers_count}</p>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </InfiniteScroll>
    </ul>
  );
}
