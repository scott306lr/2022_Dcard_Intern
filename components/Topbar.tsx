import React, { useRef, useState } from 'react'
import { HomeIcon, SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import SearchBar from './SearchBar';


export default function Topbar() {

  return (
    <span className='flex bg-pri_color items-center justify-center'>
      <Link href="/">
        <header className='flex items-center cursor-pointer text-white text-md p-4'>
          <HomeIcon className='h-5 w-5'/>
          <h1>GitRepo</h1>
        </header>
      </Link>

      <span className='flex mx-auto items-center justify-center h-8'>
        <SearchBar/>
      </span>
      
    </span>
  )
}