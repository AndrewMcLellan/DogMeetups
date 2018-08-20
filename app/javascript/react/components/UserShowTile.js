import React from 'react'


const UserShowTile = (props) => {
  return(
    <div className="callout secondary" id="user-tile">
      <div className="row">
        <div className="columns small-8" id="your-info">

          {props.firstName} {props.lastName}<br />
          {props.city}, {props.state}<br/>
        <div className="user-page-links">
            <ul>
              <li><a id="links-text" href={"/meetups/new"}>Add New Meetup</a></li>
              <li><a id="links-text" href={"/users/edit"}>Edit Profile</a></li>
              <li><a id="links-text" href={"/dogs/new"}>Add New Dog</a></li>
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
