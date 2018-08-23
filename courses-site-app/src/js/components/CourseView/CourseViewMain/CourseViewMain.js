import React, { Component } from "react";
import ReactDOM from "react-dom";
import './CourseViewMain.scss'

class CourseViewMain extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <section className="module">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="shop-single-item-photos">
                                <img src="https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388" alt />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="shop-single-item">
                                <h2 className="shop-single-item-title">Curso de Taping Neuro Fascial para Terapeutas Ocupacionales y Logopedas</h2>
                                <div className="shop-single-item-rating">
                                    <span className="star-rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                    </span>
                                    <a href="#">(2 customer reviews)</a>
                                </div>
                                <h2 className="shop-single-item-price">$100.00</h2>
                                <div className="shop-single-item-description">
                                    <p>El objetivo del curso es formar a los Terapistas Ocupacionales (y títulos equivalentes) en la utilización de este agente
                    terapéutico, tanto desde la fundamentación como desde la aplicación práctica sustentada en la anatomía topográfica y funcional.</p>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input className="form-control" type="number" defaultValue={1} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <a className="btn btn-block btn-dark" href="#">Añadir a la cesta</a>
                                    </div>
                                </div>
                                <hr className="m-t-30 m-b-30" />
                                <hr className="m-t-30 m-b-30" />
                                <div className="info-list">
                                    <li>
                                        <span className="info-list-title">Share:</span>
                                        <span>
                                            <ul className="social-icons">
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-twitter">Twitter</i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-instagram">Instagram</i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ti-facebook">Facebook</i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default CourseViewMain;