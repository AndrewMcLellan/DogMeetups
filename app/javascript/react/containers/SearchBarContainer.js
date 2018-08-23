import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchString: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.setState({ serach_results: body })
    })
  }

  render() {
    return(
      <div className="row">
        <form  className="columns" onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input type='text' name='searchString' value={this.state.searchString} onChange={this.handleChange} />

          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default SearchBar;
