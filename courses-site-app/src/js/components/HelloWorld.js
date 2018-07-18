import React, { Component } from "react";
import ReactDOM from "react-dom";
import './main.scss'

class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className='container'>
          HELLO WORLD!!!!
      </div>
    );
  }
}
export default HelloWorld;