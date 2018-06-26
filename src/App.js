import React, { Component } from "react";
import { Route, HashRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import TopBar from "./js/components/TopBar/TopBar";
import Home from "./js/components/Home/Home";
import Footer from "./js/components/Footer/Footer"
import Contact from "./js/components/Contact/Contact"
import CoursesGridView from "./js/components/CoursesGridView/index"
import CourseDetails from "./js/components/CourseView/index"
import Checkout from './js/components/Checkout/index'

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
            <Route exact path="/contacto" render={() => (
                  <Contact />
                )} />
            <Route exact path="/cursos" render={() => (
              <CoursesGridView />
            )} />
            <Route exact path="/detalles-curso" render={() => (
              <CourseDetails />
            )} />
            <Route exact path="/checkout" render={() => (
            <Checkout />
            )} />
            <Footer/>
            </div>
        </HashRouter>
    );
  }
}
export default App;