import React from 'react'
import { Link, Route, IndexRoute, Router, browserHistory } from 'react-router'



const UserShowTile = (props) => {
  return(
    <div className="callout secondary" id="user-tile">
      <div className="row">
        <div className="columns small-8" id="your-info">

          {props.firstName} {props.lastName}<br />
          {props.city}, {props.state}<br/>
        <div className="user-page-links">
            <ul>
              <li><Link id="links-text" to={"/meetups/new"}>Add New Meetup</Link></li>
              <li><Link id="links-text" to={"/users/edit"}>Edit Profile</Link></li>
              <li><Link id="links-text" to={"/dogs/new"}>Add New Dog</Link></li>
            </ul>
          </div>

        </div>

        <div className="columns small-4" id="text">
          <img  className="profile-photo" src={props.profilePhoto.url} />
        </div>
      </div>
    </div>
  )
}


export default UserShowTile
