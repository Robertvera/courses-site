import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom"
import './CheckoutForm.scss'
import Api from "../../../../api/vmApi"
import swal from 'sweetalert2'
import CheckoutCardForm from '../CheckoutCardForm/CheckoutCardForm'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      dni: '',
      address: '',
      cp: '',
      city: '',
      email: '',
      phone: '',
      course: '',
      courseName: '',
      coursePrice: '',
      courseStudents: []
    };
  }

  componentDidMount = () => {
    if (this.props.match.params.id) {
      Api.retrieveCourseId(this.props.match.params.id)
      .then(course=>{
        const {name, price, _id, students } = course.data.data[0]       
        this.setState ({
          courseName: name,
          coursePrice: price,
          course: _id,
          courseStudents: students
        })
      })
    }
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const {courseName, coursePrice} = this.state

    const data = this.state

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
                    <input 
                    onChange={e => this.handleOnChange(e)} 
                    name="name"
                    className="form-control" 
                    type="text" 
                    placeholder="Nombre"
                    required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)} 
                    name="surname"
                    className="form-control" 
                    type="text" 
                    placeholder="Apellidos" 
                    required />
                  </div>
                </div>
                <div className="row form-row">
                  <div className="col-md-3 form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)} 
                    name="dni"
                    className="form-control" 
                    type="text" 
                    placeholder="DNI" 
                    required />
                  </div>
                  <div className="col-md-4 form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)} 
                    name="phone"
                    className="form-control" 
                    type="text" 
                    placeholder="Teléfono" 
                    required />
                  </div>
                  <div className="col-md-5 form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)} 
                    name="email"
                    className="form-control" 
                    type="text" 
                    placeholder="Correo Electrónico" 
                    required />
                  </div>
                  <div className="col-md-12 form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)} 
                    name="address"
                    className="form-control" 
                    type="text" 
                    placeholder="Dirección de Facturación" 
                    required />
                  </div>
                </div>
                <div className="row form-row">
                  <div className="col-md-6 form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)} 
                    name="city"
                    className="form-control" 
                    type="text" 
                    placeholder="Población" 
                    required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)} 
                    name="cp"
                    className="form-control" 
                    type="text" 
                    placeholder="Código Postal" 
                    required />
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
                    <td>{courseName}</td>
                    <td className="text-right">{coursePrice} €</td>
                  </tr>                
                </tbody>
              </table>
              <CheckoutCardForm data={data}/>
              <div className="text-right">              
              </div>
            </div>
          </div>
        </div>
      </section>


    );
  }
}
export default withRouter(CheckoutForm);