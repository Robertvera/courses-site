import React, { Component } from "react";
import ReactDOM from "react-dom";

class ManageTeachers extends Component {
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
      <form id="students-form" method="post" noValidate>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" type="text" name="name" placeholder="Nombre" required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" type="text" name="surname" placeholder="Apellidos" required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
                <input className="form-control" type="text" name="id" placeholder="DNI" required />
                <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <input className="form-control" type="text" name="direccion" placeholder="Dirección" required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-2">
            <div className="form-group">
              <input className="form-control" type="text" name="PO" placeholder="CP" required />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
                <input className="form-control" type="text" name="city" placeholder="Ciudad/Provincia" required />
                <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input className="form-control" type="text" name="email" placeholder="Email" required />
              <p className="help-block text-danger" />
            </div>
          </div>          
          <div className="col-md-4">
            <div className="form-group">
              <input className="form-control" type="text" name="phone" placeholder="Teléfono" required />
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
export default ManageTeachers;