import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import usePullRequests from '../hooks/usePullRequests'

export default function PullRequestPage() {
  const { username, repo } = useParams()
  const { pullRequests } = usePullRequests(username, repo)

  return (
    <Page>
      <Header />
      <ul>
        {pullRequests.map(pullRequest => (
          <li key={pullRequest.id}>{pullRequest.title}</li>
        ))}
      </ul>
    </Page>
  )
}

//pullrequest.name

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
