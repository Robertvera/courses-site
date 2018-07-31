import React, { Component } from "react";
import { Route, HashRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import TopBar from "./js/components/TopBar/TopBar";
import Home from "./js/components/Home/Home";
import Footer from "./js/components/Footer/Footer"
import Contact from "./js/components/Contact/Contact"
import AdminFrame from "./js/components/Admin/AdminFrame/AdminFrame"
import Students from "./js/components/Admin/Students/Students"
import Teachers from "./js/components/Admin/Teachers/Teachers"
import Courses from "./js/components/Admin/Courses/Courses"

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
            <Route path="/es" render={()=> (
              <TopBar/>              
            )} />
            <Route exact path="/es/home" render={() => (
              <Home />
            )} />
            <Route exact path="/es/contacto" render={() => (
              <Contact />
            )} />
            <Route path="/es" render={()=> (
              <Footer/>              
            )} />
            <Route path="/admin" render={() => (
              <AdminFrame />
            )} />
            <Route exact path="/admin/students" render={() => (
              <Students />
            )} />
            <Route exact path="/admin/teachers" render={() => (
              <Teachers />
            )} />
            <Route exact path="/admin/courses" render={() => (
              <Courses />
            )} />
                         
            </div>   
        </HashRouter>
    );
  }
}
export default App;