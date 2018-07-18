import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Footer.scss'

class Footer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <footer className="footer">
                <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3">

                        <aside className="widget widget-text">
                        <div className="widget-title">
                            <h6>VMB FORMACIÓN</h6>
                        </div>
                        <div className="textwidget">
                            <p>Formación para terapeutas ocupacionales, fisioterapeutas y logopedas
                            </p>
                            <p>
                            Dirección: Barcelona ...
                            <br /> E-mail: info@vmbformacion.com
                            <br /> Teléfono: 6xx xx xx xx
                            <br />
                            </p>
                            <ul className="social-icons">
                            <li>
                                <a href="#">
                                <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <i className="fab fa-linkedin" />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </aside>
                    </div>
                    <div className="col-md-3">

                        <aside className="widget widget-recent-entries">
                        <div className="widget-title">
                            <h6>ÚLTIMOS CURSOS</h6>
                        </div>
                        <ul>
                            <li>
                            <a href="#">Curso 1</a>
                            <span className="post-date">20 y 21 Mayo 2018, Barcelona</span>
                            </li>
                            <li>
                            <a href="#">Curso 1</a>
                            <span className="post-date">20 y 21 Mayo 2018, Barcelona</span>
                            </li>
                            <li>
                            <a href="#">Curso 1</a>
                            <span className="post-date">20 y 21 Mayo 2018, Barcelona</span>
                            </li>
                        </ul>
                        </aside>
                    </div>
                    <div className="col-md-6">
                        <img src="../../../../public/images/logo-white-white.png" alt />
                    </div>                        
                    </div>
                </div>
                </div>
                <div className="footer-bar">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="copyright">
                        <p>© 2018 VMB Formación, Todos los derechos reservados.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
    );
  }
}
export default Footer;