import React from 'react'


const UserShowTile = (props) => {
  return(
    <div className="callout secondary">
      <h4>First Name:</h4>
      {props.firstName}<br />
      <h4>Last Name</h4>
      {props.lastName}<br />
      <h4>Address: </h4>
      {props.address}<br />
      <h4>City: </h4>
      {props.city}<br />
      <h4>State: </h4>
      {props.state}<br/>
      <h4>Zip Code: </h4>
      {props.zip}<br/>
    </div>
  )
}


export default UserShowTile
