import React, { Component } from "react";

class BackButton extends Component {
  constructor() {
    super();

  }

  render() {
    console.log(this.props)
    return <button onClick={this.props.onClick}>Back</button>;
  }
}

export default BackButton;
