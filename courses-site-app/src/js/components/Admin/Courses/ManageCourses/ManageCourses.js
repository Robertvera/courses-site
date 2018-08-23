import React, { Component } from "react";
import ReactDOM from "react-dom";

class ManageCourses extends Component {
  constructor() {
    super();
    this.state = {
    };
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
      <form id="courses-form" method="post" noValidate>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <input className="form-control" type="text" name="name" placeholder="Nombre curso" required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-4">
            <div className="form-group">
              <input className="form-control" type="date" name="date" placeholder="Fecha" required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <textarea className="form-control" name="description" placeholder="Descripción curso" rows={12} required defaultValue={""} />
            </div>
          </div>
          <div className="col-md-10">
            <div className="form-group">
              <input className="form-control" type="text" name="excerpt" placeholder="Resumen" required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-2">
            <div className="form-group">
              <input className="form-control" type="number" name="price" placeholder="Precio" required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <input className="form-control" type="number" name="capacity" placeholder="Capacidad" required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-10">
            <div className="form-group">
              <input className="form-control" type="text" name="location" placeholder="Localización" required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" type="text" name="teacher" placeholder="Profesor" required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
                <img src="https://michilot.com/wp-content/uploads/2017/12/pdficon.png" width="50" height="50"/>
                <span>archivo de prueba subido.pdf</span>
            </div>
            <div className="col-md-6">
                <img src="http://cdn.onlinewebfonts.com/svg/img_148071.png" width="50" height="37"/>
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