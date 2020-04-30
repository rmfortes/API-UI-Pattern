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
    this.handleNext = this.handleNext.bind(this);

    const URL = `https://api.nasa.gov/planetary/apod?api_key=PnBgWXOOulAOFC02ZcE1Ve5VLz79FknpoBOcXcK7`;
    this.dates = [
      `${URL}&date=2020-04-30`,
      `${URL}&date=2020-04-29`,
      `${URL}&date=2020-04-28`,
      `${URL}&date=2020-04-27`,
      `${URL}&date=2020-04-26`,
    ];

    this.state = {
      apod: {},
    };
  }

  componentDidMount() {
    fetch(this.dates[2])
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          apod: res,
        });
        console.log(this.state.apod);
      });
  }

  handleBack = (e) => {
    e.preventDefault();
    console.log("hello");

    fetch(this.dates[1])
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          apod: res,
        });
        console.log(this.state.apod);
      });
  };

  handleNext = (e) => {
    e.preventDefault();
    console.log("hello");

    fetch(this.dates[4])
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          apod: res,
        });
        console.log(this.state.apod);
      });
  };

  render() {
    return (
      <div>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="Slider">
          <BackButton onClick={this.handleBack} />
          <Apod {...this.state} />
          <NextButton onClick={this.handleNext} />
        </div>
      </div>
    );
  }
}

export default App;
