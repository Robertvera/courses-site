import React, { Component } from "react";
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
                                E-mail: vmbformacion@gmail.com
                                <br /> 
                                Teléfono: 640 571 426
                                <br />
                            </p>
                            <ul className="social-icons">
                            <li>
                                <a href="https://twitter.com/vmbformacion" target="_blank">
                                <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/vmbformacion/" target="_blank">
                                <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/VMBTOFORMACION/" target="_blank">
                                <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/vmbformacion/" target="_blank">
                                <i className="fab fa-linkedin" />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </aside>
                    </div>
                    <div className="col-md-6">
                        <img src="../../../../public/images/logo-white-white.png"/>
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