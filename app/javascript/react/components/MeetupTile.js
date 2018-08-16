import React from 'react'
import MapContainer from '../containers/MapContainer'

const MeetupTile = (props) => {
  let attendees;
  let creatorDogNames;
  let creatorDogsPhoto;


  if (props.creatorDogs) {
    creatorDogsPhoto = props.creatorDogs.map(dog => {
      return(
        <div key={`dog: ${dog.id}`}>
          <img src={dog.dog_photo.url}></img>
          {dog.name}
        </div>
      )
    })
  }


  if (props.attendees) {
    attendees = props.attendees.map(attendee => {
      return(
        <div key={`attendee: ${attendee.id}`} className="" id="attendee-dog-photo">
          <a href={'/users/' + attendee.user_id}>
            <li>
              <img src={attendee.dog_photo.url}/>
            </li>
          </a>
          {attendee.name}
        </div>
      )
    })
  }

  let error;
  if (props.joinError != "") {
    error =
    <div>
      {props.joinError}
    </div>
  }


  let rsvpButton;
  if (props.currentUser.id) {
      rsvpButton =
        <div className="columns small-3" id="rsvp-button">
          <form onSubmit={props.handleSubmit}>
            <button className="hover" id="map button-background">RSVP!</button>
          </form>
        </div>
  }

  let mapSource = `https://maps.google.com/maps?AIzaSyDkM_s3tnT3D0afumdd74ebSJoeF3r42Dw&q=${props.lat},${props.lng}&hl=es;z=14&amp;output=embed`
  let lat = props.lat
  let lng = props.lng
  let map;
  if (props.lat) {
    map =
    <div>
      <iframe className="column small-10" id="map"
        width="300"
        height="170"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBYRkmCd2dJJX-oElbgNhHEDoUU_4oCezk&q=${lat},${lng}`}
        >
      </iframe>
    </div>
  }
  return(
    <div>
      <div className="callout secondary small-10 meetup_show_tile" id="meetup_show_tile">
        <div className=" row callout meetup-show-infobox" id="meetup_show_infobox">

          <div className="row">
            <div className="meetup-text-box small-4" id="text">
              <div>
                <h5>Meetup Creator:</h5>
                <a href={"/users/" + props.id}>{props.creator}</a>
                <h5>Time:  </h5> {props.time}
              </div>
              <div className="description">
                <h5>
                  Description:
                </h5>

                {props.description}
              </div>
            </div>
            <div className="columns small-5" id="map-div">
              Location: <br/>
              {props.location}
              {map}
            </div>
          </div>
        </div>
        <div className="meetup-dogs-info" id="meetup-dogs-info">
          <div className="callout primary small-5" id="attending-dogs">
            <h4>Hosting Dogs: </h4>
            <div className="small-6">
              {creatorDogsPhoto}
            </div>
          </div>
          <div className="callout primary small-5" id="attending-dogs">
            <h4>Attending Dogs: </h4>
            <ul>
              <div className="small-10">
                {attendees}
              </div>
            </ul>
          </div>
        </div>

        <div className="row" id="map-rsvp">
          <div className="columns">
            {rsvpButton}
            </div>
            <div className="columns">
              {error}
              <a href={"/meetups/"+ props.id + "/edit"}>Click here To edit Meetup</a>
            </div>

        </div>
        </div>
    </div>
  )
}

export default MeetupTile
