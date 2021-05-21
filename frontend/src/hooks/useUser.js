import githubApi from '../service/githubAPI'
import { useEffect, useState } from 'react'

export default function useUser(username) {
  const [profile, setProfile] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    githubApi
      .get('https://api.github.com/users/' + username)
      .then(response => response.data)
      .then(response => {
        setProfile(response)
        setError('')
      })
      .catch(error => {
        setError(error.response.status)
        setProfile({})
      })
  }, [username])

  return { profile, error }
}
