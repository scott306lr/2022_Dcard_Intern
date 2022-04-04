import { HomeIcon, SearchIcon, StarIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import ReposList from '../components/ReposList'
import SearchBar from '../components/SearchBar'
import { useGetStarRepos } from '../hooks/useGetStarRepos'

const Home: NextPage = () => {
  const [ starRepos, nextPage, hasMore, status ] = useGetStarRepos();

  return (
    <div className="flex-center flex-col h-screen py-2 bg-bg_color">
      <Head>
        <title>GitRepo - Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-center flex-col h-full w-full p-5">
        
        <div className='flex-center flex-col sm:flex-row  w-full py-5'>
          <div className='flex h-full items-center text-white bg-bg_color rounded-l-2xl pr-5'> 
            <HomeIcon className='h-14 w-14'/>
            <h1 className='text-5xl'>GitRepo</h1>
          </div>
          <div className='flex-center h-20 flex-grow'>
            <SearchBar/>
          </div>
        </div>

        <hr className='flex w-full border-t-2 border-gray-300'/>
        <div className='flex flex-col h-3/5 w-full items-start justify-start text-white'> 
          <h1 className='text-4xl pt-2 flex truncate'>OR...</h1>
          <h1 className='text-2xl truncate hidden sm:flex'>below are some popular repositories:</h1>
          <div className='flex-center flex-grow h-52 w-full py-5'>
            <ReposList
              data={starRepos}
              nextPage={nextPage}
              hasMore={hasMore}
              status={status}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
