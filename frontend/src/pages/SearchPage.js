import React, { useState } from 'react'
import UserSearchForm from '../components/UserSearchForm'
import Header from '../components/Header'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import useUser from '../hooks/useUser'

export default function SearchPage() {
  const [username, setUsername] = useState('cathesso')
  const { profile, error } = useUser(username)
  return (
    <Page>
      <Header />
      <h1>Hallo, {profile.login} 👋🏽</h1>
      <Avatar src={profile.avatar_url} />
      <UserSearchForm username={username} setUsername={setUsername} />
      {!error && <Link to={'/repos/' + username}>View Repositories</Link>}
    </Page>
  )
}

const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`
