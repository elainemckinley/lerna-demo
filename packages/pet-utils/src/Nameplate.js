import React, { Component } from 'react'

class Nameplate extends Component {
  render() {
    const {breed, type} = this.props
    return (
      <div className="Nameplate">
        <h3>This is a {breed} {type}</h3>
      </div>
    )
  }
}

export default Nameplate
