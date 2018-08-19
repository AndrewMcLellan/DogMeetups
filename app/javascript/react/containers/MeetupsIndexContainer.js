import React, { Component } from 'react'
import MeetupIndexTile from '../components/MeetupIndexTile'


class MeetupsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meetups: [],
      searchResults: [],
      searchString: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  handleSubmit(event) {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: this.state.searchString
    })
    fetch('/api/v1/meetups/search.json', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      console.log(body.meetups)
      this.setState({
        searchResults: body.meetups
       })
    })
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
      this.setState({
        meetups: response.meetups
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let meetups;
    if (this.state.searchResults.length === 0) {

      meetups = this.state.meetups.map(meetup => {
        return(
          <MeetupIndexTile
            key={meetup.id}
            id={meetup.id}
            location={meetup.location}
            date={meetup.date}
            time={meetup.time}
            description={meetup.description}
            creatorDogs={meetup.creator_dogs}
            attendees={meetup.meetup_attendees}
            />
        )
      })
    } else {
      meetups = this.state.searchResults.map(meetup => {
        return(
          <MeetupIndexTile
            key={meetup.id}
            id={meetup.id}
            location={meetup.location}
            date={meetup.date}
            time={meetup.time}
            description={meetup.description}
            creatorDogs={meetup.creator_dogs}
            attendees={meetup.meetup_attendees}
            />
        )
      })
    }

    return(
        <div className=" ">
          <div className="callout meetup-index">
            <form className="search-field" onSubmit={this.handleSubmit}>
              <label>Search</label>
              <input type='text' name='searchString' value={this.state.searchString} onChange={this.handleChange} />
              <input type='submit' value='Submit' />
            </form>
            <h4 className="results-header" id="text">Showing Results Within 10 miles of you: </h4>
            <div>
              {meetups}
            </div>

        </div>
      </div>

    )
  }
}



export default MeetupsIndexContainer
