import { HomeIcon, SearchIcon, StarIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'
import ReposList from '../components/ReposList'
import SearchBar from '../components/SearchBar'
import { useGetStarRepos } from '../hooks/useGetStarRepos'

const Home: NextPage = () => {
  const [ starRepos, hasMore, nextPage ] = useGetStarRepos();

  return (
    <div className="h-screen flex flex-col items-center justify-center py-2 bg-bg_color">
      <Head>
        <title>GitRepo - Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full w-full items-start justify-start text-center p-20">
        
        <div className='flex flex-col sm:flex-row w-full items-center justify-start px-20 py-5 space-x-10'>
          <div className='flex h-full items-center text-white bg-bg_color rounded-l-2xl'> 
            <HomeIcon className='h-14 w-14'/>
            <h1 className='text-5xl'>GitRepo</h1>
          </div>
          <div className='flex h-20 flex-grow items-center justify-center'>
            <SearchBar/>
          </div>
        </div>

        <hr className='flex w-full border-t-2 border-gray-300'/>
        <div className='flex flex-col w-full p-5 items-start justify-start text-white'> 
          <h1 className='text-4xl pt-2 inline truncate'>OR...</h1>
          <h1 className='text-2xl  truncate hidden sm:inline'>below are some popular repositories:</h1>
          <div className='py-5 w-full'>
            <ReposList
              data={starRepos}
              height={420}
              nextPage={nextPage}
              hasMore={hasMore}
            />
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default Home
