import { Link } from 'react-router-dom'

export default function RepoCard({ repo, username }) {
  return (
    <div>
      <Link to={'/' + username + '/' + repo.name + '/pulls'}>{repo.name}</Link>
    </div>
  )
}
