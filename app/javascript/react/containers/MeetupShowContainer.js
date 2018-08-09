import React, { Component } from 'react'
import MeetupTile from '../components/MeetupTile'

class MeetupShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetup: {},
      meetup_id: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
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
      console.log(response)
      this.setState({
        meetup_id: response.meetup_id,

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
      this.setState({
        meetup: response.meetup
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  render() {
    return(
      <div>
        <MeetupTile
          location={this.state.meetup.location}
          creator={this.state.meetup.creator}
          description={this.state.meetup.description}
          creatorDogs={this.state.meetup.creator_dogs}
          handleSubmit={this.handleSubmit}
          />
      </div>
    )
  }
}


export default MeetupShowContainer
