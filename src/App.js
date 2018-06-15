import React, { Component } from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./js/components/HelloWorld"
import CoursesGrid from './js/components/CoursesGrid'

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
          <HelloWorld />
          <CoursesGrid />
      </div>
    );
  }
}
export default App;