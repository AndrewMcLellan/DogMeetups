import React from 'react'

const DogShowTile = (props) => {

  let dogPhoto;
  if (props.dogPhoto) {
    dogPhoto = <img className="dog-photo" src={props.dogPhoto}></img>
  }
  return(

      <div className="callout primary columns small-6" id="dogs-show-tile">
        <div>
        {dogPhoto}
        </div>
        {props.name}<br />
        Age: {props.age} <br/>
        {props.weight} lbs
        <h4 id="text">Breed</h4>
        {props.breed}
        <div>
          <a href={"/dogs/" + props.id + "/edit"}>Edit Dogs Profile</a>
        </div>
      </div>


  )
}


export default DogShowTile
