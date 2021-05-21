import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import RepoPage from './pages/RepoPage'

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
        <Route path={'/repo/pulls/:username'}>
          <PullRequestPage />
        </Route>
      </Switch>
    </Router>
  )
}
