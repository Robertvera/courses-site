import React, { Component } from "react";
import { Route, HashRouter } from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';
import ReactGA from 'react-ga';
import { loadReCaptcha } from 'react-recaptcha-google'
import Home from "./js/components/Home/Home";
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
import Login from './js/components/Admin/Login/Login'
import ScrollToTop from './js/components/utils/ScrollToTop'

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    ReactGA.initialize('UA-132816841-1'); 
    ReactGA.pageview(window.location.hash);
    loadReCaptcha();
  }

  pageView = () => ReactGA.pageview(window.location.hash);

  render() {
  
    return (
        <HashRouter >
          <ScrollToTop>
            <Route exact path="/" render={() => (
              this.pageView(),
              <Home />
            )} />
            <Route exact path="/contacto" render={() => (
              this.pageView(),
              <Contact />
            )} />
            <Route exact path="/cursos" render={() => (
              this.pageView(),
              <CoursesGridView />
            )} />
            <Route exact path="/detalles/:course" render={(routeProps) => (
              this.pageView(),
              <CourseDetails {...routeProps} />
            )} />
            <Route exact path="/checkout/:id" render={(routeProps) => (
              this.pageView(),
              <StripeProvider apiKey="pk_live_zJl4KlFhNK4zqdqzTJNGLBD9">
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
          </ScrollToTop>
        </HashRouter>
    );
  }
}
export default App;




