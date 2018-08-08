import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import UserShowContainer from '../containers/UserShowContainer'
import MeetupsIndexContainer from '../containers/MeetupsIndexContainer'
import MeetupShowContainer from '../containers/MeetupShowContainer'

const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <Route path='/users' />
          <Route path='/users/:id' component={UserShowContainer} />
          <Route path='/meetups' component={MeetupsIndexContainer} />
          <Route path='/meetups/:id' component={MeetupShowContainer} />
        </Route>
      </Router>
    </div>

  )

}

export default App
