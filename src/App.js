import React, { Component } from "react";
import ReactDOM from "react-dom";
import TopBar from "./js/components/TopBar/TopBar";
import Home from "./js/components/Home/Home";



class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
      <TopBar/>
      <Home/>
      </div>
    );
  }
}
export default App;