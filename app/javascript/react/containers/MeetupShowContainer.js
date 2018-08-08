import React, { Component } from 'react'
import MeetupTile from '../components/MeetupTile'

class MeetupShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetup: {}
    }
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
          />
      </div>
    )
  }
}


export default MeetupShowContainer
