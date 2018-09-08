import React, { Component } from "react";
import ReactDOM from "react-dom";
import Api from "../../../../../api/vmApi"
import swal from 'sweetalert2'

class ManageStudents extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      surname: '',
      dni: '',
      address: '',
      cp: '',
      city: '',
      email: '',
      phone: ''
    };
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, surname, dni, address, cp, city, email, phone }  = this.state

    Api.editStudent(name, surname, dni, address, cp, city, email, phone)
    .then(student => {
      student.data.status === 'OK' ?
        swal({
          title: '¡Estudiante modificado!',
          showConfirmButton: true,
          timer: 1500
        })
        :
        swal({
          type: 'error',
          title: 'Error modificando el estudiante',
          showConfirmButton: true,
          timer: 2000
        })
    }
    )
    .then(
      this.setState({
        name: '',
        surname: '',
        dni: '',
        address: '',
        cp: '',
        city: '',
        email: '',
        phone: ''
      })
    )
  }

  render() {
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
                name="dni" 
                placeholder="DNI" 
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
              name="phone" 
              placeholder="Teléfono" 
              required />
              <p className="help-block text-danger" />
            </div>
          </div>                    
          <div className="col-md-12 mt-4">

            <div className="text-center">
              <input className="btn btn-circle btn-brand" type="submit" defaultValue="Guardar" />
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
export default ManageStudents;