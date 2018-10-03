import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom'
import './AdminFrame.scss'

class AdminFrame extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <div>
  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#/es/home">VMB FORMACIÓN</a>
    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <a className="nav-link" href="#">Sign out</a>
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
  </div>
</div>


    );
  }
}
export default AdminFrame;