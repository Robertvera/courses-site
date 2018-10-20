import React, { Component } from "react";
import ReactDOM from "react-dom";
import Api from '../../../../api/vmApi'
import { withRouter } from "react-router-dom"
import swal from 'sweetalert2'



class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      courseToEdit: '',
      query: '',
      skipResults: 0
    };
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = () => {
    const { skipResults } = this.state 
    Api.listCourses(skipResults).then(courses => {
      this.refactorCoursesToShow(courses)
    })
  }

  refactorCoursesToShow = courses => {
    let coursesListed = courses.data.data
    coursesListed.forEach(course => {
      if (course.date && course.date.length) {
        course.date = new Date(course.date)
        course.date = `${course.date.getDate()}/${course.date.getMonth()+1}/${course.date.getFullYear()}`;
      }
    });
    this.setState({ courses: [ ...this.state.courses, ...coursesListed ]})
  }

  showMoreCourses = e => {
    e.preventDefault()
    const showMore = this.state.skipResults + 12
    this.state.skipResults = showMore
    console.log(this.state.skipResults)
    this.getCourses()
  }

  componentDidUpdate(props) {
    console.log("props", props)
    // this.getCourses()
  }

  editCourse = (e,course)=> {
    e.preventDefault()
    this.props.history.push(`/admin/courses/manage/${course}`)
  }

  searchCoursesByQuery = e => {
    this.setState({ query: e.target.value.trim() })
    Api.retrieveCourseQuery(this.state.query)
    .then((courses)=>{
      this.refactorCoursesToShow(courses)
    })
  }


  deleteCourse = (e, course) => {
    e.preventDefault()
    swal({
      title: `¿Estás seguro de que quieres eliminar ${course}?`,
      text: "Una vez eliminado, no podrás volver atrás",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, lo quiero eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Api.deleteCourse(course)
          .then(() => {
            swal({
              title: '¡Curso eliminado!',
              type: 'success',
              showConfirmButton: false,
              timer: 1500,
              onOpen: () => {
                swal.showLoading()
              }
            })
              .then(this.getCourses())
          })
      }
    })
  }

  render() {
    const { courses } = this.state
    
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Cursos</h1>
          <input 
          onChange={e => this.searchCoursesByQuery(e)}
          className="form-control form-control w-100" 
          type="text" 
          placeholder="Search" 
          aria-label="Search" 
          />
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button className="btn btn-sm btn-outline-secondary">Share</button>
              <button className="btn btn-sm btn-outline-secondary">Export</button>
            <button 
            onClick={() => this.props.history.push(`/admin/courses/manage`)}
            className="btn btn-sm btn-outline-secondary"
            >
              Crear curso
            </button>
            </div>
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
                      <td>{course.students.length}</td>
                      <td>{course.capacity}</td>
                      <td>{course.price}</td>
                      <td>
                        <button 
                        onClick={e =>{this.deleteCourse(e, course.name)}} 
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
          <button
            onClick={e => this.showMoreCourses(e)}
            type="button"
            class="btn-sm btn-outline-danger"
          >
            Mostrar más cursos
          </button>
        </div>
      </main>
    );
  }
}
export default withRouter(Courses);
