import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { Endpoints } from '@octokit/types'
import { isEmpty } from 'lodash-es'

type listRepoInfoResponse =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data']

export const useGetRepoInfo = (): [listRepoInfoResponse, String] => {
  const router = useRouter()
  const { username, repo } = router.query
  const [userRepo, setUserRepo] = useState<listRepoInfoResponse>(
    Object.create(null)
  )
  const [status, setStatus] = useState<String>('loading')

  useEffect(() => {
    const fetchRepoInfo = async () => {
      if (username && repo) {
        const ss = JSON.parse(window.sessionStorage.getItem('userRepo') || '{}')
        if (!isEmpty(ss) && ss.owner.login === username && ss.name === repo) {
          setUserRepo(ss)
          setStatus('ok')
          return
        }

        const url = `https://api.github.com/repos/${username}/${repo}`
        const data = await axios
          .get(url)
          .then((res: AxiosResponse) => res.data)
          .catch((res: AxiosError) => {
            if (res.response?.status === 403) {
              console.log('API rate limit exceeded')
              setStatus('403')
            } else {
              console.log('API error')
              setStatus('error')
            }

            return
          })

        if (data) {
          setUserRepo(data)
          window.sessionStorage.setItem('userRepo', JSON.stringify(data))
          setStatus('ok')
        }
      }
    }

    fetchRepoInfo()
  }, [username, repo])

  return [userRepo, status]
}
