import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Endpoints } from '@octokit/types';

type listStarReposResponse =
  Endpoints["GET /users/{username}/repos"]["response"]["data"];

export const useGetStarRepos = (): [listStarReposResponse, boolean, () => void] => {
  const [ hasMore, setHasMore ] = useState(true);
  const [ pageNum, setPageNum ] = useState(1);
  const [ starRepos, setStarRepos ] = useState<listStarReposResponse>([]);

  const fetchRepos = async () => {
    const url = `https://api.github.com/search/repositories?q=stars:%3E15000&per_page=10&page=${pageNum}`;
    const data = await axios.get(url)
      .then((res:AxiosResponse) => res.data.items)
      .catch((res:AxiosError) => {
        if (res.response?.status === 403) {
          console.log("API rate limit exceeded");
        }else {
          console.log("API error");
        }
        return;
      });
      
    if (data?.length){
      setStarRepos(starRepos.concat(data));
      setHasMore(true);
    }else {
      setHasMore(false);
    }
  }

  const nextPage = () => {
    setPageNum(pageNum+1);
  }

  useEffect(() => {
    fetchRepos();
  }, [pageNum])

  return [starRepos, hasMore, nextPage];
}
