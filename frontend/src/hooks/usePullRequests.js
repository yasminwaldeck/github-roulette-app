import githubApi from '../service/githubAPI'
import { useEffect, useState } from 'react'

export default function usePullRequests(username, repo) {
  const [pullRequests, setPullRequests] = useState([])

  useEffect(() => {
    githubApi
      .get('https://api.github.com/repos/' + username + '/' + repo + '/pulls')
      .then(response => response.data)
      .then(setPullRequests)
  }, [repo, username])

  return { pullRequests }
}
