import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class AttendingMeetupsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendances: props.attendance,
      errors: []
    }
    this.handleDeleteAttendance = this.handleDeleteAttendance.bind(this)
  }

  handleDeleteAttendance(meetupId, attendanceId) {
    fetch(`/api/v1/meetups/${meetupId}/attendances/${attendanceId}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
     })
     .then(response => response.json())
     .then(response => {
       console.log(response)
       this.setState({
         errors: response.errors,
         attendances: response.attendances
       })
     })
 }

  render() {
    let attendances = this.state.attendances.map(attendance => {
      let handleDelete = () => {
        this.handleDeleteAttendance(attendance.attended_meetup.id, attendance.attendance.id)
      }
      return(
        <div className="callout primary" id="text">
          <h4 id="text">{attendance.attended_meetup.date}</h4>
          {attendance.attended_meetup.time}
          {attendance.attended_meetup.location}
          <div>
            <button className="" id="delete-rsvp-button" type="button" value="Remove RSVP" onClick={handleDelete}>Remove RSVP!</button>
          </div>
        </div>
      )
    })

    return(
      <div>
        {attendances}
      </div>

    )
  }
}




export default AttendingMeetupsComponent
