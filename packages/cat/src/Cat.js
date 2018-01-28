import React, { Component } from 'react'
import { Nameplate } from 'pet-utils'

class Cat extends Component {
  render() {
    return (
      <div className="AnimalContainer">
        <img src="https://i.imgur.com/LY65lC0.jpg" alt="Kitty" />
        <Nameplate type="Cat" breed="Munchkin" />
      </div>
    )
  }
}

export default Cat
