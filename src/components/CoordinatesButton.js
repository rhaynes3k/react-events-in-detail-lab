// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick = (props) => {
    this.props.onReceiveCoordinates([props.clientX, props.clientY])
    // console.log(this.props.onReceiveCoordinates([props.clientX, props.clientY]))
    // mouseCoordinates.push(e.target)
  }

  render(){
    return(
      <div>
        <button type='button' onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default CoordinatesButton
