import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import UserShowContainer from '../containers/UserShowContainer'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <Route path='/users' />
          <Route path='/users/:id' component={UserShowContainer} />
        </Route>
      </Router>
    </div>

  )

}

export default App
