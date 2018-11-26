import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom'
import './TopBar.scss'

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (

        <header className="header header-transparent">
        <div className="container-fluid">

            <div className="inner-header">
            <a className="inner-brand" href="/#/">VMB Formación</a>
            </div>

            <div className="inner-navigation collapse">
            <div className="inner-nav onepage-nav">
                <ul>
                <li>
                    <a href="/#/">
                        <span className="menu-item-span">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/#/cursos">
                    <span className="menu-item-span">Cursos</span>
                    </a>
                </li>
                <li>
                    <a href="/#/contacto">
                    <span className="menu-item-span">Contacto</span>
                    </a>
                </li>
                <li>
                    <a href="/#/blog">
                    <span className="menu-item-span">Blog</span>
                    </a>
                </li>
                </ul>
            </div>
            </div>
            <div className="extra-nav">
            <ul>
                <li className="nav-toggle">
                <a href="#" data-toggle="collapse" data-target=".inner-navigation">
                    <span className="menu-item-span">
                    <i className="ti-menu" />
                    </span>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </header>


    );
  }
}
export default TopBar;