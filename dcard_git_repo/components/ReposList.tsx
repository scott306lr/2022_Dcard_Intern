import { StarIcon } from '@heroicons/react/outline';
import { Endpoints } from '@octokit/types'
import Link from 'next/link'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

type listRepoInfoResponse =
Endpoints["GET /users/{username}/repos"]["response"]["data"];

type Props = {
  data: listRepoInfoResponse 
  height: number
  nextPage: () => void
  hasMore: boolean
  
}

export default function ReposList({data, height, nextPage, hasMore}: Props) {
  return (
    <ul className='border border-hov_color text-gray-800 rounded-md'>
      <InfiniteScroll
        dataLength={data.length}
        height={height}
        scrollThreshold={0.8}
        next={nextPage}
        hasMore={hasMore}
        loader={<h4 className='flex justify-center text-gray-500'>Loading...</h4>}
        endMessage={<h4 className='flex justify-center text-gray-500'>You reached the end!</h4>}
        className='scrollbar-hide rounded-md'
      >
        {
          data.map((repoInfo, idx) => {
            return(
              <li key={idx}>
                <div className="card">
                  <Link href={`/users/${repoInfo?.owner?.login}/repos/${repoInfo?.name}`}>
                    <div className='flex p-2'>
                      <h1 className='flex-grow text-left inline truncate'>{repoInfo?.name}</h1>
                      <div className='flex items-center'>
                        <StarIcon className='w-5 h-5'/>
                        <p>{repoInfo?.stargazers_count}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <hr className='border-t-[0.1px] border-gray-300'/>
              </li>
            )
        })}
      </InfiniteScroll>  
    </ul>
  )
}