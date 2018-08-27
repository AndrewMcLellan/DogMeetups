import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class AttendingMeetupsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendance: props.attendance,
      errors: []
    }
  }

  render() {
    let tile;


    if (this.props.attendance != 0) {
      tile = <div className="callout primary" id="text">
        <h4 id="text">{this.state.attendance.attended_meetup.date}</h4>
          {this.props.attendance.attended_meetup.time}
          {this.props.attendance.attended_meetup.location}
          {this.props.attendance.dog_name}
        <div>
          <button className="" id="delete-rsvp-button" type="button" value="Remove RSVP" onClick={this.props.handleDelete}>Remove RSVP!</button>
        </div>
      </div>
    }

    return(
      <div>
        {tile}
      </div>

    )
  }
}




export default AttendingMeetupsComponent
