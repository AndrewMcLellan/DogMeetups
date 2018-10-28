import React, { Component } from 'react'
import LocationFieldComponent from '../components/meetupform/LocationFieldComponent'
import DateFieldComponent from '../components/meetupform/DateFieldComponent'
import DescriptionFieldComponent from '../components/meetupform/DescriptionFieldComponent'
import TimeFieldComponent from '../components/meetupform/TimeFieldComponent'
import NewMeetupErrorComponent from '../components/meetupform/NewMeetupErrorComponent'
import { browserHistory } from 'react-router'



class NewMeetupContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      date: '',
      time: '',
      description: '',
      error: []
    }
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }


  handleLocationChange(event) {
    this.setState({ location: event.target.value })
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  handleTimeChange(event) {
    this.setState({ time: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
      let formPayLoad = {
        location: this.state.location,
        date: this.state.date,
        time: this.state.time,
        description: this.state.description
      }
      fetch('/api/v1/meetups.json', {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(formPayLoad),
        headers: { 'Content-Type': 'application/json' }
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
        debugger;
        this.setState({
          error: response.error
        })
        if (this.state.error == 'success') {
          browserHistory.push('/meetups')
        }
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  handleClearFrom() {
    this.setState({
      location: '',
      date: '',
      time: '',
      description: ''
    })
  }

  render() {
    let newMeetupErrorComponent;
    if (this.state.error != "success" && this.state.error != '') {
      newMeetupErrorComponent = this.state.error.map(message => {
        return(
          <NewMeetupErrorComponent
            errorMessage={message}
            />
        )
      })
    }
    return(
      <div>

        <form onSubmit={this.handleFormSubmit}>
          <br />
          <br/>
          <div id="new-meetup-title">
            Create a New Meetup
          </div>
          <div className="row" id="new-meetup">
            <br />
            <br/>
            <div className="columns small-6" id ="new-meetup-title">
              <LocationFieldComponent
                content={this.state.location}
                label="Location"
                name="location"
                handleLocationChange={this.handleLocationChange}
                />
              <DateFieldComponent
                content={this.state.date}
                label="Date"
                name="date"
                handleDateChange={this.handleDateChange}
                />
            </div>
            <div className="columns small-6" id="new-meetup-title">
              <DescriptionFieldComponent
                content={this.state.description}
                label="Description"
                name="description"
                handleDescriptionChange={this.handleDescriptionChange}
                />
              <TimeFieldComponent
                content={this.state.time}
                label="Time"
                name="time"
                handleTimeChange={this.handleTimeChange}
                />
              <button onClick={this.handleFormSubmit} type="submit" value="Submit" label="Sbumit">Submit</button>
            </div>
            <div id="new-meetup-error">
              {newMeetupErrorComponent}
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default NewMeetupContainer
