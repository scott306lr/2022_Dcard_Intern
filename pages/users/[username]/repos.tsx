import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import InfiniteScroll from "react-infinite-scroll-component";
import Link from 'next/link'
import { useGetUserInfo } from '../../../hooks/useGetUserInfo'
import { useGetUserRepos } from '../../../hooks/useGetUserRepos'
import { StarIcon } from '@heroicons/react/outline';
import Topbar from '../../../components/Topbar';
import ReposList from '../../../components/ReposList';

const Repos: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const [ userInfo, status ] = useGetUserInfo();
  const [ userRepos, hasMore, nextPage ] = useGetUserRepos();

  return (
    <div className="flex flex-col h-screen w-screen bg-bg_color">
      <Head>
        <title>Repo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar/>

      <main className={`${status === "ok" ? "flex-center" : "hidden"} items-stretch h-full w-full p-2 bg-bg_color`}>
        <div className='flex-center flex-col md:flex-row w-5/6 rounded-lg bg-white m-4'>
          <div className='flex flex-col items-center space-y-4'>
            <Link href={`${userInfo?.html_url}`}>
              <img 
                src={`${userInfo?.avatar_url}`}
                className='flex w-4/5 max-w-[14rem] md:max-w-[24rem] rounded-full border-2 border-hov_color cursor-pointer hover:shadow-lg'
                
              />
            </Link>
            <h1 className=' '> {userInfo?.name} </h1>
          </div>
          <div className='flex flex-col md:flex-grow w-4/5 max-w-[30rem] p-5'>
            <h3>{`Public Repositories ${(userInfo) ? "("+userInfo?.public_repos+")" : ""}:`}</h3>
            
            <ReposList
              data={userRepos}
              height={280}
              nextPage={nextPage}
              hasMore={hasMore}
            />
          </div>
              
        </div>
      </main>

      <h1 className={`h-full w-full ${status === "error" ? "flex" : "hidden"} items-center justify-center text-2xl text-gray-300`}>
        {`User "${username}" Not Found!`}
      </h1>

      <h1 className={`h-full w-full ${status === "403" ? "flex" : "hidden"} items-center justify-center text-2xl text-gray-300`}>
        API rate limit exceeded !
      </h1>
    </div>
  )
}

export default Repos
