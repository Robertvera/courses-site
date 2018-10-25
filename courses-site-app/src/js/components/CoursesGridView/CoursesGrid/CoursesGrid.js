import React, { Component } from "react";
import ReactDOM from "react-dom";
//import CourseDetails from './../../CourseView/index'
import './CoursesGrid.scss'
import Api from '../../../../api/vmApi'
import { withRouter } from "react-router-dom"
import swal from 'sweetalert2'

class CoursesGrid extends Component {
  constructor() {
    super();
    this.state = {
      courses: ''
    };
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = () => {
    Api.listCourses().then(courses => {
      this.setState({
        courses: courses.data.data
      })
    })
  }

  showCourse = (e, course) => {
    e.preventDefault()
    this.props.history.push(`/es/detalles/${course}`)
  }

  render() {
    const { courses } = this.state

    return (
        <section className="module">
          <div className="container">
            <div className="row">
            {
              courses.length ?
                courses.map(course => {
                  return <div className="col-md-4">
                    <div className="shop-grid-item">
                      <div className="shop-item-thumb imageContainer">
                        <a
                        onClick={e =>{this.showCourse(e, course.name)}}
                        >
                          <img className="imageCourse" src={course.image || "https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388"} alt />
                        </a>
                        <div className="shop-item-hidden">
                          <a 
                          className="btn btn-new-white" 
                          onClick={e =>{this.showCourse(e, course.name)}}
                          >
                          Ver más información
                          </a>
                        </div>
                      </div>
                      <div className="shop-item-captions">
                        <h6 className="shop-item-title">{course.name}</h6>
                        <span className="shop-item-price">{course.price}€</span>
                      </div>
                    </div>
                  </div>
                })
                : null
            }
           
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="space" data-my="40px" />
              </div>
            </div>
          </div>
        </section>
    );
  }
}
export default withRouter(CoursesGrid);