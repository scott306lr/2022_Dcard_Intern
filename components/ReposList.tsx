import { StarIcon } from '@heroicons/react/outline';
import { Endpoints } from '@octokit/types'
import Link from 'next/link'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

type listRepoInfoResponse =
Endpoints["GET /users/{username}/repos"]["response"]["data"];

type Props = {
  data: listRepoInfoResponse 
  nextPage: () => void
  hasMore: boolean
}

export default function ReposList({data, nextPage, hasMore}: Props) {
  return (
    <ul 
      id="scrollableUl"
      className='grid h-full w-full scrollbar-hide overflow-auto border border-hov_color text-gray-800 rounded-md bg-white'
    >
      <InfiniteScroll
        dataLength={data.length}
        scrollThreshold={0.8}
        next={nextPage}
        hasMore={hasMore}
        loader={<h4 className='flex-context text-gray-500'>Loading...</h4>}
        endMessage={<h4 className='flex-context text-gray-500'>You reached the end!</h4>}
        scrollableTarget="scrollableUl"
      >
        {
          data.map((repoInfo, idx) => {
            return(
              <li key={idx}>
                <div className="card border border-gray-300">
                  <Link href={`/users/${repoInfo?.owner?.login}/repos/${repoInfo?.name}`}>
                    <div className='flex'>
                      <h1 
                        className='flex-grow text-left inline truncate'
                        id='repo-name'
                      >
                        {repoInfo?.name}
                      </h1>
                      <span 
                        className='flex items-center'
                        id='star-count'
                      >
                        <StarIcon className='w-5 h-5'/>
                        <p>{repoInfo?.stargazers_count}</p>
                      </span>
                    </div>
                  </Link>
                </div>
              </li>
            )
        })}
      </InfiniteScroll>  
    </ul>
  )
}