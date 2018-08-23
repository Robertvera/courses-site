import React, { Component } from "react";
import ReactDOM from "react-dom";
import Api from "../../../../../api/vmApi"
import swal from 'sweetalert2'

class ManageCourses extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      excerpt: "",
      price: "",
      image: "",
      pdf: "",
      capacity: "",
      location: "",
      date: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, description, excerpt, price, image, pdf, capacity, location, date }  = this.state
    
    Api.createCourse(name.trim().toLowerCase(), description, excerpt, price, image, pdf, capacity, location, date)
    
    this.setState({ 
      name: "",
      description: "",
      excerpt: "",
      price: "",
      image: "",
      pdf: "",
      capacity: "",
      location: "",
      date: ""
    })

    swal({
        title: '¡Curso creado!',
        showConfirmButton: true,
        timer: 1500
    })
  }  


    handleName = e => {
      const _name = e.target.value

      this.setState({
          name: _name
      })
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
            id="courses-form" method="post" noValidate
            >
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                    onChange={e => this.handleName(e)} 
                    className="form-control" 
                    type="text" 
                    name="name" 
                    placeholder="Nombre curso" 
                    required
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input className="form-control" type="date" name="date" placeholder="Fecha"  />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea className="form-control" name="description" placeholder="Descripción curso" rows={12}  defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-group">
                    <input className="form-control" type="text" name="excerpt" placeholder="Resumen"  />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <input className="form-control" type="number" name="price" placeholder="Precio"  />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <input className="form-control" type="number" name="capacity" placeholder="Capacidad"  />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-group">
                    <input className="form-control" type="text" name="location" placeholder="Localización"  />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" type="text" name="teacher" placeholder="Profesor"  />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="https://michilot.com/wp-content/uploads/2017/12/pdficon.png" width="50" height="50" />
                      <span>archivo de prueba subido.pdf</span>
                    </div>
                    <div className="col-md-6">
                      <img src="http://cdn.onlinewebfonts.com/svg/img_148071.png" width="50" height="37" />
                      <span>imagendeprueba.jpg</span>
                    </div>
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
export default ManageCourses;