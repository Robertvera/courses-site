import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom"
import Api from "../../../../../api/vmApi"
import swal from 'sweetalert2'

class ManageStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      documentId: '',
      address: '',
      cp: '',
      city: '',
      email: '',
      phoneNumber: ''
    };
  }

  componentDidMount = () => {
    Api.retrieveStudent(this.props.match.params.student)
    .then(student => {
      const {name, surname, documentId, address, cp, city, email, phoneNumber} = student.data.data
      this.setState({
        name,
        surname,
        documentId,
        address,
        cp,
        city,
        email,
        phoneNumber
      })
    })
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, surname, documentId, address, cp, city, email, phoneNumber }  = this.state

    Api.editStudent(name, surname, documentId, address, cp, city, email, phoneNumber)
    .then(student => {
      console.log(student)
      student.data.status === 'OK' ?
        swal({
          title: '¡Estudiante modificado!',
          showConfirmButton: true,
          timer: 1500
        })
        .then(this.props.history.push(`/admin/students/`))
        :
        swal({
          type: 'error',
          title: 'Error modificando el estudiante',
          showConfirmButton: true,
          timer: 2000
        })
    }
    )    
  }

  render() {

    const {name, surname, documentId, address, cp, city, email, phoneNumber} = this.state

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
      onSubmit={e => this.handleSubmit(e)}
      id="students-form" 
      method="post" 
      noValidate>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input 
              onChange={e => this.handleOnChange(e)} 
              className="form-control" 
              type="text" 
              name="name" 
              placeholder="Nombre" 
              value={name}
              required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-6">
            <div className="form-group">
              <input 
              onChange={e => this.handleOnChange(e)} 
              className="form-control" 
              type="text" 
              name="surname" 
              placeholder="Apellidos" 
              value={surname}
              required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
                <input
                onChange={e => this.handleOnChange(e)}  
                className="form-control" 
                type="text" 
                name="documentId" 
                placeholder="DNI" 
                value={documentId}
                required />
                <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <input 
              onChange={e => this.handleOnChange(e)} 
              className="form-control" 
              type="text" 
              name="address" 
              placeholder="Dirección" 
              value={address}
              required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-2">
            <div className="form-group">
              <input 
              onChange={e => this.handleOnChange(e)} 
              className="form-control" 
              type="text" 
              name="cp" 
              placeholder="CP" 
              value={cp}
              required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <input 
                onChange={e => this.handleOnChange(e)} 
                className="form-control" 
                type="text" 
                name="city" 
                placeholder="Ciudad/Provincia" 
                value={city}
                required />
                <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input 
              onChange={e => this.handleOnChange(e)} 
              className="form-control" 
              type="text" 
              name="email" 
              placeholder="Email" 
              value={email}
              required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-4">
            <div className="form-group">
              <input 
              onChange={e => this.handleOnChange(e)} 
              className="form-control" 
              type="text" 
              name="phoneNumber" 
              placeholder="Teléfono" 
              value={phoneNumber}
              required />
              <p className="help-block text-danger" />
            </div>
          </div>                    
          <div className="col-md-12 mt-4">

            <div className="text-center">
              <input 
              onSubmit={e => this.handleSubmit(e)}
              className="btn btn-circle btn-brand" 
              type="submit" 
              defaultValue="Guardar" />
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
export default withRouter(ManageStudents);