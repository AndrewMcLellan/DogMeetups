import React from 'react'
import MapContainer from '../containers/MapContainer'
import ChatContainer from '../containers/ChatContainer'

const MeetupTile = (props) => {
  let attendees;
  let creatorDogNames;
  let creatorDogsPhoto;


  if (props.creatorDogs) {
    creatorDogsPhoto = props.creatorDogs.map(dog => {
      return(
        <div key={`dog: ${dog.id}`}>
          <img id="host-dog-photo" src={dog.dog_photo.url}></img>
          <h4 id="dog-name-text">
            {dog.name}
          </h4>
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
            <h4 id="dog-name-text">
              {attendee.name}
            </h4>
          </a>
        </div>
      )
    })
  }

  let error;
  if (props.joinError != "") {
    error =
    <div id="error">
      {props.joinError}
    </div>
  }


  let rsvpButton;
  if (props.currentUser.id) {
      rsvpButton =
        <div className="" id="rsvp-button">
          <form onSubmit={props.handleSubmit}>
            <button className="hover" id="button-background">RSVP!</button>
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
        height="300"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBYRkmCd2dJJX-oElbgNhHEDoUU_4oCezk&q=${lat},${lng}`}
        >
      </iframe>
    </div>
  }
  debugger;
  return(
    <div>
      <div className="row callout secondary meetup_show_tile" id="meetup_show_tile">
        <div className="callout meetup-show-infobox " id="meetup_show_infobox">

          <div className="meetup-text-box" id="text">
            <div className="columns small-10 meetup-info-box">
              <div>
                <h5>Meetup Creator:</h5>
                <a href={"/users/" + props.userId}>{props.creator}</a>
                <h5>Time:  </h5> {props.time}
              </div>
              <div >
                <h5>
                  Description:
                </h5>
                {props.description} <br/> <br />
              </div>
            </div>
            <div>
              <div>
                <div className="columns small-6 edit-link-div">
                  <a className="edit-link" href={"/meetups/"+ props.id + "/edit"}>Edit Meetup</a>
                </div>
                <div className="columns small-6">
                  {rsvpButton} <br/> <br/>
                  <div className="" id="map-rsvp error">
                    {error}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


          <div className="columns">
            <div className="callout primary columns small-6" id="map-div">
              Location: <br/>
              {props.location}
              {map}
            </div>
            <div className=" columns small-6 callout primary" id="chat-div">
              <ChatContainer
                />
            </div>
          </div>

          <div className="columns" id="meetup-dogs-info">
            <div className="callout primary columns small-6 " id="attending-dogs">
              <h4 id="text">Hosting Dogs: </h4>
              <div className="">
                {creatorDogsPhoto}
              </div>
            </div>

            <div className="callout primary columns small-6 " id="attending-dogs">
              <h4 id="text">Attending Dogs: </h4>
              <ul>
                <div className="" id="">
                  {attendees}
                </div>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MeetupTile
