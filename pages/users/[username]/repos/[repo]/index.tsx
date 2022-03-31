import { ArrowNarrowLeftIcon, StarIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Topbar from '../../../../../components/Topbar'
import { useGetRepoInfo } from '../../../../../hooks/useGetRepoInfo'
import { useGetUserInfo } from '../../../../../hooks/useGetUserInfo'

const RepoInfo: NextPage = () => {
  const router = useRouter();
  const { username, repo } = router.query;
  const [ userInfo, _ ] = useGetUserInfo();
  const [ userRepo, status ] = useGetRepoInfo();
  
  return (
    <div className="h-screen w-screen bg-bg_color">
      <Head>
        <title>GitRepo - Repo Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar/>

      <main className={`${status === "ok" ? "flex-center" : "hidden"} flex-col h-full text-gray-300`}>
        <div className='flex-center flex-col w-full max-w-[40rem] px-5'>
          <div className='flex-center w-full'>
            <p className='inline truncate text-xl'> Current Selected Repository: </p>
            <div className='flex flex-grow items-center justify-end'>
              <span 
                className='flex-center text-gray-500 cursor-pointer hover:text-white'
                onClick={() => router.push(`/users/${userInfo?.login}/repos`)}
              >
                <ArrowNarrowLeftIcon className='w-6 h-6' />
                <img 
                  className='w-10 h-10 border-1 border-gray border-hov_color rounded-full'
                  src={`${userInfo?.avatar_url}`} 
                  alt="userAvatar" 
                />
              </span>
            </div>
          </div>
          <a
            className='flex-center flex-col items-start w-full m-5 px-5 py-12 space-y-2
              border rounded-lg cursor-pointer hover:bg-hov_color'
            id='repoInfo'
            href={userRepo?.html_url}
            target="_blank" 
            rel="noreferrer noopener"
          >
            <div className='flex w-full space-x-4 py-2 truncate'>
              <h1 
                className='text-2xl inline truncate'
                id='full_name'
              >
                {userRepo?.full_name}
              </h1>
              <span className='flex-center hidden sm:flex text-xs px-2 border border-gray-300 rounded-full'>{userRepo?.private ? "Private" : "Public"}</span>
              <span 
                className='flex-center flex-grow justify-end'
                id='star-count'
              >
                <StarIcon className='w-5 h-5'/>
                <p>{userRepo?.stargazers_count}</p>
              </span>
            </div>
            
            <hr className='w-full border-t-[1px] border-gray-300'/>
            {userRepo?.description 
              ? <p id='description' className='flex text-md'> {userRepo?.description} </p>
              : <p id='description' className='flex text-md text-gray-500'> No description provided... </p>
            }
            
          </a>
        </div>
      </main>

      <h1 id="404" className={`h-full w-full ${status === "error" ? "flex" : "hidden"} items-center justify-center text-2xl text-gray-300`}>
        {`User "${username}" doesn't match repository "${repo}" !`}
      </h1>

      <h1 id="403" className={`h-full w-full ${status === "403" ? "flex" : "hidden"} items-center justify-center text-2xl text-gray-300`}>
        API rate limit exceeded !
      </h1>
    </div>
  )
}

export default RepoInfo
