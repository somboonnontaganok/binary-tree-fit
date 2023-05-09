import React from 'react'

function EditPage() {
  return (
    <div className="editpage">
      <div className="edit-activity">
        <h1>Edit Activity</h1>
      </div>
      <div className="acitivity-image">

      </div>
      <div className="activity-title">
        <h5>Title</h5>
        <input className="input-title" type="text" />
      </div>
      <div className="workout-type">
        <h5>Workout Type</h5>
        <input className="input-workout-type" type="" />
      </div>
      <div className="description">
        <h5>Description</h5>
        <input className="input-description" type="text" />
      </div>
      <div className="duration">
        <h5>Duration</h5>
        <input className="input-duration" type="number" />
      </div>
      
    </div>
  )
}

export default EditPage