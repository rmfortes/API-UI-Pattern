import React, { Component } from "react";

class BackButton extends Component {
  constructor() {
    super();

  }

  render() {
    return <button onClick={this.props.onClick}>Back</button>;
  }
}

export default BackButton;
