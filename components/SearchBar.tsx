import { SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {}

export default function SearchBar({}: Props) {
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputName) {
      router.push(`/users/${inputName}/repos`)
      setInputName('')
    }
  }
  const [inputName, setInputName] = useState('')

  return (
    <form
      className="flex h-full w-full items-center text-gray-600 border-2 border-gray-300 bg-white rounded-lg"
      onSubmit={handleSubmit}
      id="searchbar"
    >
      <input
        className="flex w-full pl-5 text-auto text-xl focus:outline-none"
        type="text"
        name="search"
        placeholder="Enter Github Username..."
        onChange={(e) => {
          setInputName(e.target.value)
        }}
        value={inputName}
      />
      <button
        className="flex flex-grow justify-end pr-5"
        type="submit"
        form="searchbar"
      >
        <SearchIcon className="h-6 text-gray-600" />
      </button>
    </form>
  )
}
