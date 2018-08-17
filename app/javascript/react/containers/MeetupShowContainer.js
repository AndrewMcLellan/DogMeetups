import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MeetupTile from '../components/MeetupTile'
import { browserHistory } from 'react-router'
import ChatContainer from './ChatContainer'

class MeetupShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetup: {},
      attendees: [],
      finalAttendeeNames: [],
      currentUser: {},
      error: '',
      joinError: '',


    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = this.state.attendances
    fetch(`/api/v1/meetups/${this.state.meetup.id}/attendances.json`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      let newAttendees;
      let currentAttendees = this.state.attendees
      let currentAttendeesNames = this.state.finalAttendeeNames
      let error2;
      let error3;
      let attendeeNames = []
      let newAttendeeNames = []


      if (this.state.meetup.user_id != this.state.currentUser.id && !this.state.finalAttendeeNames.includes(response.attendee.name)) {
        newAttendees = currentAttendees.concat(response.attendee)
        newAttendeeNames = currentAttendeesNames.concat(response.attendee.name)
        error2 = ""
        this.setState({
          attendees: newAttendees,
          finalAttendeeNames: newAttendeeNames
        })
      } else if (this.state.meetup.user_id == this.state.currentUser.id) {
        newAttendees = currentAttendees
        error2 = "you cannot join a meetup you own"
        this.setState({
          joinError: error2
        })
      } else {
        error3 = "you have already joined this meetup"
        this.setState({
          joinError: error3
        })
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  componentDidMount() {
    fetch(`/api/v1/meetups/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      let attendeeNames = []
      response.meetup.meetup_attendees.forEach((attendee) => {
        attendeeNames.push(attendee.name)
      })
      this.setState({
        meetup: response.meetup,
        attendees: response.meetup.meetup_attendees,
        currentUser: response.meetup.current_user,
        finalAttendeeNames: attendeeNames
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    return(
      <div>
        <div>
          <MeetupTile
            key={this.state.meetup.id}
            id={this.state.meetup.id}
            location={this.state.meetup.location}
            creator={this.state.meetup.creator}
            description={this.state.meetup.description}
            creatorDogs={this.state.meetup.creator_dogs}
            lat={this.state.meetup.lat}
            lng={this.state.meetup.lng}
            handleSubmit={this.handleSubmit}
            creatorDogs={this.state.meetup.creator_dogs}
            attendees={this.state.attendees}
            time={this.state.meetup.time}
            currentUser={this.state.currentUser}
            joinError={this.state.joinError}
            finalAttendeeNames={this.state.finalAttendeeNames}
            />
        </div>
      </div>
    )
  }
}


export default MeetupShowContainer
