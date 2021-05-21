import { Link } from 'react-router-dom'

export default function RepoCard({ repo }) {
  return (
    <div>
      <Link to={'repos/pull/'}>{repo.name}</Link>
      <p>{repo.pulls_url}</p>
    </div>
  )
}
