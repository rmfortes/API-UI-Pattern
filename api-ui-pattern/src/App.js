import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Slider from "./Slider.js";
import BackButton from "./BackButton.js";
import NextButton from "./NextButton.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      apod: [],
    };
  }
  componentDidMount() {
    let URL =
      "https://api.nasa.gov/planetary/apod?api_key=P4ncDIoRkQG82aKvVwMr8Gc4KX2dpGRTOvJptk3Y";

    fetch(URL)
      .then((res) => res.json())
      .then((convertedRes) => {
        console.log(convertedRes);
      });
  }

  render() {
    let date = this.state.date;
    let explanation = this.state.explanation;
    return (
      <div>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="Slider">
          <BackButton />
          <h1>{date}</h1>
          {/* <img src={}></img> */}
          <p>{explanation}</p>
          <NextButton />
        </div>
      </div>
    );
  }
}

export default App;
