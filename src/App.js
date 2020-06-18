import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [
        {
          name: "Fido",
          img: "https://placeimg.com/200/200/animals"
        },
        {
          name: "Sparkles",
          img: "https://placeimg.com/200/200/animals"
        },
        {
          name: "Pookers",
          img: "https://placeimg.com/200/200/animals"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Landing animalSelection={this.state.animals} />
        <Footer />
      </div>
    );
  }
}
