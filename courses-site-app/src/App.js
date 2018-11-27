import React, { Component } from "react";
import { Route, HashRouter, Switch } from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';
import ReactDOM from "react-dom";
import TopBar from "./js/components/TopBar/TopBar";
import Home from "./js/components/Home/Home";
import Footer from "./js/components/Footer/Footer"
import Contact from "./js/components/Contact/Contact"
import AdminFrame from "./js/components/Admin/AdminFrame/AdminFrame"
import Students from "./js/components/Admin/Students/Students"
import Teachers from "./js/components/Admin/Teachers/Teachers"
import Courses from "./js/components/Admin/Courses/Courses"
import ManageCourses from "./js/components/Admin/Courses/ManageCourses/ManageCourses"
import ManageStudents from "./js/components/Admin/Students/ManageStudents/ManageStudents"
import ManageTeachers from "./js/components/Admin/Teachers/ManageTeachers/ManageTeachers"
import CoursesGridView from "./js/components/CoursesGridView/index"
import CourseDetails from "./js/components/CourseView/index"
import Checkout from './js/components/Checkout/index'
import CheckoutCardForm from './js/components/Checkout/CheckoutCardForm/CheckoutCardForm'
import Login from './js/components/Admin/Login/Login'

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
            <Route exact path="/" render={() => (
              <Home />
            )} />
            <Route exact path="/contacto" render={() => (
              <Contact />
            )} />
            <Route exact path="/cursos" render={() => (
              <CoursesGridView />
            )} />
            <Route exact path="/detalles/:course" render={(routeProps) => (
              <CourseDetails {...routeProps} />
            )} />
            <Route exact path="/checkout/:id" render={(routeProps) => (
              <StripeProvider apiKey="pk_test_FMPOPKE34szBONAbbVNm0OCn">
                <Checkout {...routeProps}/>
              </StripeProvider>  
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
            <Route exact path="/admin/courses/manage" render={() => (
              <ManageCourses />
            )} />
            <Route exact path="/admin/students/manage/:student" render={(routeProps) => (
              <ManageStudents {...routeProps}/>
            )} />  
            <Route exact path="/admin/courses/manage/:course" render={(routeProps) => 
              <ManageCourses {...routeProps} /> 
            } />
            <Route exact path="/admin/students/manage" render={() => (
              <ManageStudents />
            )} />
            <Route exact path="/admin/teachers/manage/:teacher" render={(routeProps) => (
              <ManageTeachers {...routeProps}/>
            )} />
            <Route exact path="/admin/teachers/manage" render={() => (
              <ManageTeachers />
            )} />
            <Route exact path="/manage/login" render={() => (
              <Login />
            )} />
            </div>
        </HashRouter>
    );
  }
}
export default App;




