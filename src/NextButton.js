import React, { Component } from "react";

class NextButton extends Component {
  constructor() {
    super();
  }

  render() {
    return <button onClick={this.props.onClick}>Next</button>;
  }
}

export default NextButton;
