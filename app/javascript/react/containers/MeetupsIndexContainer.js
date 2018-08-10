import React, { Component } from 'react'
import MeetupIndexTile from '../components/MeetupIndexTile'

class MeetupsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meetups: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/meetups')
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
        meetups: response.meetups
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render() {
    let meetups = this.state.meetups.map(meetup => {

      return(
        <MeetupIndexTile
          key={meetup.id}
          id={meetup.id}
          location={meetup.location}
          date={meetup.date}
          description={meetup.description}
          creatorDogs={meetup.creator_dogs}
          />
      )
    })
    let creatorDogs = this.state.meetups.creator_dogs.map(dog => {
      debugger
      return(
        <MeetupIndexTile
          key={dog.}
          />
      )
    })
    return(
      <div className="columns">
        {meetups}
      </div>

    )
  }
}



export default MeetupsIndexContainer
