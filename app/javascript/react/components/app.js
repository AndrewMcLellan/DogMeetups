import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import UserShowContainer from '../containers/UserShowContainer'
import MeetupsIndexContainer from '../containers/MeetupsIndexContainer'
import MeetupShowContainer from '../containers/MeetupShowContainer'
import ChatContainer from '../containers/ChatContainer'


const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <Route path='/users' />
          <Route path='/users/:id' component={UserShowContainer} />
          <Route path='/meetups' component={MeetupsIndexContainer} />
          <Route path='/messages' component={ChatContainer} />
          <Route path='/messages/:id' component={ChatContainer} />
          <Route path='/meetups/:id'>
            <IndexRoute component={MeetupShowContainer}/>
            <Route path='/meetups/:id/attendances/new' component={MeetupShowContainer}/>
          </Route>
        </Route>
      </Router>
    </div>

  )

}

export default App
