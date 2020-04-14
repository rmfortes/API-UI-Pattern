import React, { Component } from "react";

class BackButton extends Component {
  handleBack = () => {
    console.log(this);
  };
  
    render() {
      return (
          <button onClick={this.handleBack}>Back</button>
      );
    }
  }

  export default BackButton;