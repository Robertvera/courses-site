import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom'
import './AdminFrame.scss'
import Login from '../Login/Login'
import firebase from 'firebase'

class AdminFrame extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }

  componentDidMount() {
    this.checkForLogin()
  }

  checkForLogin = () => {
    let userLogin = false
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        userLogin = true
        this.setState({ login: userLogin })
      } else {
        this.setState({ login: userLogin })
      }
    })
  }

  logoutUser = (ev) => {
    ev.preventDefault()
    firebase.auth().signOut().then(() => {
      this.checkForLogin()
    }).catch((error) => {
      console.error(error)
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps => ', nextProps)
  }

  render() {
    return (
        <div>
  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#/es/home">VMB FORMACIÓN</a>
    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <button 
          className="nav-link" 
          onClick={this.logoutUser}
        >
        Sign out
        </button>
      </li>
    </ul>
  </nav>
  <div className="container-fluid">
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" href="#" to="/admin/courses">
                Cursos 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#" to="/admin/students">
                Estudiantes 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#" to="/admin/teachers">
                Profesores
              </NavLink>
            </li>              
          </ul>
        </div>
      </nav>
    </div>
      {
        this.state.login ?  '' : < Login onCheckForLogin={this.checkForLogin} />
      }
  </div>
</div>
    );
  }
}
export default AdminFrame;