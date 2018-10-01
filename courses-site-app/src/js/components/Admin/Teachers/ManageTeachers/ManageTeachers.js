import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom"
import Api from "../../../../../api/vmApi"
import swal from 'sweetalert2'

class ManageTeachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      documentId: '',
      occupation: '',
      titles: '',
      email: '',
      twitter: '',
      linkedin: '',
      phoneNumber: '',
      courses: '',
      modeEdition: false,
      allCourses: [],
      query: ''
    };
  }

  componentDidMount = () => {

    if (this.props.match.params.teacher) {
      Api.retrieveTeacher(this.props.match.params.teacher)
      .then(teacher => {
        const {name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses} = teacher.data.data
        this.setState({
          name,
          surname,
          documentId,
          occupation,
          titles,
          email,
          twitter,
          linkedin,
          phoneNumber,
          courses,
          modeEdition: true
        })
      })
    }

    Api.listCourses()
    .then(courses => {
      const allCourses = courses.data.data
      this.setState({
        allCourses
      })
    })
  }

  handleEdit = e => {
    e.preventDefault()
    const { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses }  = this.state

    Api.editTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses)
    .then(teacher => {
      teacher.data.status === 'OK' ?
        swal({
          title: 'Profesor modificado!',
          showConfirmButton: true,
          timer: 1500
        })
        .then(this.props.history.push(`/admin/teachers/`))
        :
        swal({
          type: 'error',
          title: 'Error modificando el profesor',
          showConfirmButton: true,
          timer: 2000
        })
    }
    )    
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses }  = this.state

    Api.createTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber)
    .then(teacher => {
      console.log(teacher)
      teacher.data.status === 'OK' ?
      swal({
        title: 'Profesor creado!',
        showConfirmButton: true,
        timer: 1500
      })
      .then(this.props.history.push(`/admin/teachers/`))
      :
      swal({
        type: 'error',
        title: 'Error creando el profesor',
        showConfirmButton: true,
        timer: 2000
      })
    })

  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleQuery = e => {
    this.setState({ query: e.target.value })
    Api.retrieveCourseQuery(this.state.query)
    .then((courses)=>{
      console.log(courses)
    })
  }

  render() {

    const {name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses} = this.state
    const textButton = this.state.modeEdition ? 'Guardar' : 'Crear'

    return (

        <div className="container col-md-10 offset-md-2">
    <div className="row">
    <div className="col-md-12">
      <div className="space" data-my="60px" />
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 pt-5">
      <form 
      id="teachers-form" 
      method="post" 
      onSubmit={e => !this.state.modeEdition ? this.handleSubmit(e) : this.handleEdit(e)}
      noValidate>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <input 
              className="form-control" 
              type="text" 
              name="name" 
              placeholder="Nombre" 
              value={name}
              onChange={e => this.handleOnChange(e)} 
              required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-5">
            <div className="form-group">
              <input 
              className="form-control" 
              type="text" 
              name="surname" 
              placeholder="Apellidos" 
              value={surname}
              onChange={e => this.handleOnChange(e)} 
              required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
                <input 
                className="form-control" 
                type="text" 
                name="documentId" 
                placeholder="DNI" 
                value={documentId}
                onChange={e => this.handleOnChange(e)} 
                required />
                <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input 
              className="form-control" 
              type="text" 
              name="occupation" 
              placeholder="Ocupación" 
              value={occupation}
              onChange={e => this.handleOnChange(e)} 
              required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-4">
            <div className="form-group">
              <input 
              className="form-control" 
              type="text" 
              name="titles" 
              placeholder="Títulos"
              value={titles} 
              onChange={e => this.handleOnChange(e)} 
              required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <input 
                className="form-control" 
                type="text" 
                name="email" 
                placeholder="Email" 
                value={email}
                onChange={e => this.handleOnChange(e)} 
                required />
                <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input 
              className="form-control" 
              type="text" 
              name="twitter" 
              placeholder="Twitter" 
              value={twitter}
              onChange={e => this.handleOnChange(e)} 
              required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-4">
            <div className="form-group">
              <input 
              className="form-control" 
              type="text" 
              name="linkedin" 
              placeholder="Linkedin" 
              value={linkedin}
              onChange={e => this.handleOnChange(e)} 
              required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input 
              className="form-control" 
              type="text" 
              name="phoneNumber" 
              placeholder="Número de teléfono" 
              value={phoneNumber}
              onChange={e => this.handleOnChange(e)} 
              required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input 
                className="form-control" 
                type="text" 
                name="query" 
                placeholder="Introduce el nombre del curso para buscar" 
                onChange={e => this.handleQuery(e)} 
                required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>Cursos que imparte</th>
                      <th></th>
                    </tr>
                  </thead>
                  {this.state.courses ?
                  <tbody>
                    {this.state.courses.map(course => {
                    return <tr key={course._id}>
                            <td>{course.name}</td>
                            <td>
                            <DeleteButton />                           
                            </td>
                          </tr>
                    })}
                  </tbody>
                  : undefined}
                </table>
              </div>
          </div>
          <div className="col-md-12 mt-4">

            <div className="text-center">
              <input className="btn btn-circle btn-brand" type="submit" defaultValue={textButton} />
            </div>
          </div>
        </div>
      </form>
  </div>
</div>
</div>

        



    );
  }
}
export default withRouter(ManageTeachers);