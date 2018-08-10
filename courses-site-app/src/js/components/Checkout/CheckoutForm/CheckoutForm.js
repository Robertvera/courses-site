import React, { Component } from "react";
import ReactDOM from "react-dom";
import './CheckoutForm.scss'

class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <section className="module">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="heading-underline">
                <h5 className="m-b-30">Datos de Facturación</h5>
              </div>
              <form>
                <div className="row form-row">
                  <div className="col-md-6 form-group">
                    <input className="form-control" type="text" placeholder="Nombre" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input className="form-control" type="text" placeholder="Apellidos" required />
                  </div>
                </div>
                <div className="row form-row">
                  <div className="col-md-6 form-group">
                    <input className="form-control" type="text" placeholder="Teléfono" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input className="form-control" type="text" placeholder="Correo Electrónico" required />
                  </div>
                  <div className="col-md-12 form-group">
                    <input className="form-control" type="text" placeholder="Dirección de Facturación" required />
                  </div>
                </div>
                <div className="row form-row">
                  <div className="col-md-6 form-group">
                    <input className="form-control" type="text" placeholder="Población" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input className="form-control" type="text" placeholder="Código Postal" required />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row m-t-70">
            <div className="col-md-8 m-auto">
              <div className="heading-underline">
                <h5 className="m-b-30">Resumen del Pedido</h5>
              </div>
              <table className="table cart-table">
                <tbody>
                  <tr>
                    <td>Nombre del curso 1</td>
                    <td className="text-right">21€</td>
                  </tr>
                  <tr>
                    <td>Nombre del curso 2</td>
                    <td className="text-right">31€</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td className="text-right">52€</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-right">
                <a className="btn btn-brand" href="#">Realizar Pedido</a>
              </div>
            </div>
          </div>
        </div>
      </section>


    );
  }
}
export default CheckoutForm;