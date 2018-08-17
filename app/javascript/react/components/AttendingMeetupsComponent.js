import React from 'react'

const AttendingMeetupsComponent = (props) => {

  let attendances = props.attendance.map(attendance => {
    return(
      <div>
        <h4>{attendance.attended_meetup.date}</h4>
        {attendance.attended_meetup.time}<br/>
        {attendance.attended_meetup.location}
      </div>

    )
  })

  return(
    <div>
      <div className="callout primary">
        {attendances}
      </div>
    </div>

  )
}




export default AttendingMeetupsComponent
