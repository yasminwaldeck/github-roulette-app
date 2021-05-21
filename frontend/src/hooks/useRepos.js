import githubApi from '../service/githubAPI'
import { useEffect, useState } from 'react'

export default function useRepos(username) {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    githubApi
      .get('https://api.github.com/users/' + username + '/repos')
      .then(response => response.data)
      .then(response => setRepos(response))
  }, [username])

  return { repos }
}
