import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import UserShowContainer from '../containers/UserShowContainer'
import MeetupsIndexContainer from '../containers/MeetupsIndexContainer'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <Route path='/users' />
          <Route path='/users/:id' component={UserShowContainer} />
          <Route path='/meetups' component={MeetupsIndexContainer} />
        </Route>
      </Router>
    </div>

  )

}

export default App
