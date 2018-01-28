import React, { Component } from 'react'
import { Nameplate } from 'pet-utils'

class Dog extends Component {
  render() {
    return (
      <div className="AnimalContainer">
        <img src="https://i.imgur.com/7AVF1yD.jpg" alt="Doggo" />
        <Nameplate type="Dog" breed="German Shepherd" />
      </div>
    )
  }
}

export default Dog
