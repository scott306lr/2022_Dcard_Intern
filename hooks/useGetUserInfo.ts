import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { Endpoints } from '@octokit/types'
import { isEmpty } from 'lodash-es'

type listUserInfoResponse =
  Endpoints['GET /users/{username}']['response']['data']

export const useGetUserInfo = (): [listUserInfoResponse, String] => {
  const router = useRouter()
  const { username } = router.query
  const [userInfo, setUserInfo] = useState<listUserInfoResponse>(
    Object.create(null)
  )
  const [status, setStatus] = useState<String>('loading')

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (username) {
        const ss = JSON.parse(window.sessionStorage.getItem('userInfo') || '{}')
        if (!isEmpty(ss) && ss.login === username) {
          setUserInfo(ss)
          setStatus('ok')
          return
        }

        const url = `https://api.github.com/users/${username}`
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
          setUserInfo(data)
          window.sessionStorage.setItem('userInfo', JSON.stringify(data))
          setStatus('ok')
        }
      }
    }

    fetchUserInfo()
  }, [username])

  return [userInfo, status]
}
