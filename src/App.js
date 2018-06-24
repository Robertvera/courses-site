import React, { Component } from "react";
import { Route, HashRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import TopBar from "./js/components/TopBar/TopBar";
import Home from "./js/components/Home/Home";
import Footer from "./js/components/Footer/Footer"

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <HashRouter>
          <div>
            <TopBar/>
            <Route exact path="/" render={() => (
                  <Home />
                )} />
            <Footer/>
            </div>
        </HashRouter>
    );
  }
}
export default App;