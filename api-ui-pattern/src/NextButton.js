import React, { Component } from "react";

class NextButton extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props)
    return <button onClick={this.props.onClick}>Next</button>;
  }
}

export default NextButton;
