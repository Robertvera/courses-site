import React, { Component } from "react";
import ReactDOM from "react-dom";
import './CoursesGridHero.scss'

class CoursesGridHero extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <section className="module-page-title parallax courses-image" data-background="/../../../../../public/images/header-courses.jpg" data-overlay="0.1">
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