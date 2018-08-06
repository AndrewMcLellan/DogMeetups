import React from 'react'


const UserShowTile = (props) => {
  return(
    <div>
      {props.firstName}<br />
      {props.lastName}<br />
      {props.address}<br />
      {props.city}<br />
      {props.state}<br/>
      {props.zip}<br/>
    </div>
  )
}


export default UserShowTile
