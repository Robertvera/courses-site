import React, { Component } from "react";
import ReactDOM from "react-dom";
import './CoursesGridHero.scss'
//import Header from './../../../../../public/images/cursos.jpg'

class CoursesGridHero extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <section className="module-page-title parallax courses-header" data-background="" data-overlay="0.1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Cursos</h2>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Cursos</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
    );
    }
}
export default CoursesGridHero;