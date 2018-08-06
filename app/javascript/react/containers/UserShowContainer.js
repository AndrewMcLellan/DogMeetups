import React, { Component } from 'react'
import UserShowTile from '../components/UserShowTile'


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
        zip: ""
      }

    }
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
        user: response.user
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {
    return(
      <div>
        <UserShowTile
          key={this.state.user.id}
          id={this.state.user.id}
          firstName={this.state.user.first_name}
          lastName={this.state.user.last_name}
          address={this.state.user.address}
          city={this.state.user.city}
          state={this.state.user.state}
          zip={this.state.user.zip}
          />
      </div>

    )
  }
}


export default UserShowContainer
