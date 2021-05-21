import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import RepoPage from './pages/RepoPage'
import repo from './hooks/usePullRequests'
import PullRequestPage from './pages/PullRequestPage'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact>
          <SearchPage />
        </Route>
        <Route path={'/repos/:username'}>
          <RepoPage />
        </Route>
        <Route path={'/:username/:repo/pulls'}>
          <PullRequestPage />
        </Route>
      </Switch>
    </Router>
  )
}
