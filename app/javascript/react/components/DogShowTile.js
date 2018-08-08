import React from 'react'

const DogShowTile = (props) => {
  return(

      <div className="callout secondary" id="dog-tile">
        <h4>Dogs Name</h4>
        {props.name}
        <h4>Dog Age</h4>
        {props.age}
        <h4>Weight</h4>
        {props.weight} lbs
        <h4>Good With Puppies?</h4>
        {props.goodWithPuppies}
        <h4>Dog Breed</h4>
        {props.breed}
      </div>

  )
}


export default DogShowTile
