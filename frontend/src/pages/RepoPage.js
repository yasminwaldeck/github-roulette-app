import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import useRepos from '../hooks/useRepos'
import RepoCard from '../components/RepoCard'

export default function RepoPage() {
  const { username } = useParams()
  const { repos } = useRepos(username)

  return (
    <Page>
      <Header />
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <RepoCard repo={repo} username={username} />
          </li>
        ))}
      </ul>
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
