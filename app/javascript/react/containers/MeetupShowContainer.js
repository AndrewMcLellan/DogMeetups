import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MeetupTile from '../components/MeetupTile'
import { browserHistory } from 'react-router'

class MeetupShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetup: {},
      attendees: []

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

      let currentAttendees = this.state.attendees
      let newAttendees = currentAttendees.concat(response.attendee)

      // let newAttendee = currentAttendees.concet(response.attendee)
      this.setState({
        attendees: newAttendees
      })
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
      console.log(response)
      this.setState({
        meetup: response.meetup,
        attendees: response.meetup.meetup_attendees
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    return(
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
          />
      </div>
    )
  }
}


export default MeetupShowContainer
