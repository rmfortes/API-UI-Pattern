import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Slider from "./Slider.js";

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
    return (
      <div>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="App">
          <p>{date}</p>
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
