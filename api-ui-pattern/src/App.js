import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import BackButton from "./BackButton.js";
import Apod from "./Apod.js";
import NextButton from "./NextButton.js";

class App extends Component {
  constructor() {
    super();
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      apod: {},
    };
  }

  componentDidMount() {
    let URL =
      "https://api.nasa.gov/planetary/apod?api_key=P4ncDIoRkQG82aKvVwMr8Gc4KX2dpGRTOvJptk3Y";

    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.setState({
          apod: res,
        });
        console.log(this.state.apod.date)
      });
  }

  handleBack = () => {
    console.log('hello');
  };

  render() {
    console.log(this.state.apod);

    return (
      <div>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="Slider">
          <BackButton />
          <Apod
            // url={this.state.apod.url}
            // date={this.state.apod.date}
            // title={this.state.apod.title}
            // explanation={this.state.apod.explanation}
            {...this.state}
            //! the spread operator allows you to pass all the contents of an object
          />
          <NextButton />
        </div>
      </div>
    );
  }
}

export default App;
