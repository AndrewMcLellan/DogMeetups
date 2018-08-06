import React, { Component } from 'react'
import UserShowTile from '../components/UserShowTile'
import DogShowTile from '../components/DogShowTile'



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
      },
      user_dogs: []

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
        user: response.user,
        user_dogs: response.user.user_dogs
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
          />

      )
    })

    return(
      <div>
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
        <div className="row">
          {userDogs}
        </div>
      </div>

    )
  }
}


export default UserShowContainer
