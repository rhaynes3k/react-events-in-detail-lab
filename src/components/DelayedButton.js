// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
  handleClick = (event) => {
    console.log(event)
    setTimeout(() => {
      event.persist()
      this.props.onDelayedClick(event)
      console.log(event)
    }, this.props.delay)

  }
  render(){
    return(
      <button type='button' onClick={this.handleClick} >Click</button>
    )
  }
}

export default DelayedButton
