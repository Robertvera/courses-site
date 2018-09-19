import React, { Component } from "react";
import ReactDOM from "react-dom";
import Api from '../../../../api/vmApi'
import { withRouter } from "react-router-dom"
import swal from 'sweetalert2'



class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: '',
      courseToEdit: ''
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

  editCourse = (e,course)=> {
    e.preventDefault()
    this.props.history.push(`/admin/courses/manage/${course}`)
  }

  render() {
    const { courses } = this.state
    
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Cursos</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button className="btn btn-sm btn-outline-secondary">Share</button>
              <button className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar" />
              This week
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Sede</th>
                <th>Apuntados</th>
                <th>Límite</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                courses.length ?
                  courses.map( course => {             
                    return <tr key={course._id}>
                      <td>{course.name}</td>
                      <td>{course.date}</td>
                      <td>{course.location}</td>
                      <td>Nº ESTUDIANES</td>
                      <td>{course.capacity}</td>
                      <td>{course.price}</td>
                      <td>
                        <button 
                        type="button" 
                        class="btn-sm btn-outline-danger"
                        >
                        Borrar
                        </button>
                        <button
                        onClick={e =>{this.editCourse(e, course.name)}} 
                        type="button" 
                        class="btn-sm btn-outline-warning"
                        >
                          Editar
                        </button>                       
                      </td>
                    </tr>
                  })
                : null  
              }
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}
export default withRouter(Courses);
