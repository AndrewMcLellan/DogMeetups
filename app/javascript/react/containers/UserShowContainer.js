import React, { Component } from 'react'
import UserShowTile from '../components/UserShowTile'
import DogShowTile from '../components/DogShowTile'
import MeetupShowTile from '../components/MeetupShowTile'
import AttendingMeetupsComponent from '../components/AttendingMeetupsComponent'
import { browserHistory } from 'react-router'



class UserShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        profile_photo: ""
      },
      user_dogs: [],
      user_meetups: [],
      meetups: [],
      errors: [],
      attendances: []
    }
  }

  handleDeleteMeetup(meetupId) {
  fetch(`/api/v1/meetups/${meetupId}`, {
    credentials: 'same-origin',
    method: 'DELETE'
   })
   .then(response => response.json())
   .then( response => {
     this.setState({
       errors: response.errors,
       meetups: response.reviews
     })
   })
 }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`)
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
        user: response.user,
        user_dogs: response.user.user_dogs,
        user_meetups: response.user.user_meetups,
        attendances: response.user.user_attendances
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    let userDogs = this.state.user_dogs.map(dog => {
      return(
        <DogShowTile
          key={dog.id}
          id={dog.id}
          name={dog.name}
          weight={dog.weight}
          age={dog.age}
          goodWithPuppies={dog.good_with_puppies}
          breed={dog.breed}
          dogPhoto={dog.dog_photo.url}
          />

      )
    })

    let userMeetups = this.state.user_meetups.map(meetup => {
      let handleDelete = () => {
        this.handleDeleteMeetup(meetup.id)
      }
      return(
        <MeetupShowTile
          key={meetup.id}
          id={meetup.id}
          location={meetup.location}
          date={meetup.date}
          description={meetup.description}
          time={meetup.time}
          handleDelete={handleDelete}
          />
      )
    })

    let userAtteendances = this.state.attendances.map(attendance => {
      return(
        <AttendingMeetupsComponent
          attendance={attendance}
          />
      )
    })

    return(
      <div className="row callout" id="user-page">
        <div className="" id="user-info-tile">
          <UserShowTile
            key={this.state.user.id}
            id={this.state.user.id}
            firstName={this.state.user.first_name}
            lastName={this.state.user.last_name}
            address={this.state.user.address}
            city={this.state.user.city}
            state={this.state.user.state}
            zip={this.state.user.zip}
            profilePhoto={this.state.user.profile_photo}
            />
        </div>
        <div className="row">
          <div className="columns small-6" id="dog-tile">
            <h4 className="callout" id="your-dogs">Your Dogs:</h4>
            {userDogs}
          </div>
          <div className="columns small-6 large-6" id="meetup-info">
            <h4 className="callout" id="your-meetups">Your Meetups:</h4>
            {userMeetups}
            <div className="" id="">
              <h4 className="callout" id="your-dogs">Meetups You Are Attending: </h4>
              {userAtteendances}
            </div>
          </div>
        </div>
        <div className="">
        </div>
      </div>

    )
  }
}


export default UserShowContainer
