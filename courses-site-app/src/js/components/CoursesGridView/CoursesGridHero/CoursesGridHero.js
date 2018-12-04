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
            <section className="module-page-title parallax bg-gray" data-background="../../../../public/images/blackpattern.jpg" data-overlay="0.1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Cursos</h2>
                        </div>
                    </div>
                </div>
            </section>
    );
    }
}
export default CoursesGridHero;