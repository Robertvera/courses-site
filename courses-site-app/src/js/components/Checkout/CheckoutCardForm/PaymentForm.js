import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import './PaymentForm.scss'
import {CardElement} from 'react-stripe-elements';
import Api from "../../../../api/vmApi"
import swal from 'sweetalert2'
import Utils from '../../../../../public/js/utils/utils'

class PaymentForm extends React.Component {
  
  handleTest = (e) => {
    e.preventDefault();

    Utils.validateData(this.props.data)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = `${this.props.data.name} ${this.props.data.surname}`

    this.props.stripe.createToken({name})
    .then(({token}) => {
      console.log('Received Stripe token:', token.id);
      console.log(token);
      Api.sendPayment(token.id, this.props.data.courseName, this.props.data.coursePrice)
      .then(result=> {
        console.log(result);
        if (result.data.status === 'OK') {
          const { name, surname, dni, address, cp, city, email, phone, course, courseName }  = this.props.data
          let { courseStudents } = this.props.data

          Api.createStudent(name, surname, dni, address, cp, city, email, phone, course)
          .then(student => {

            if (student.data.status === 'OK') {
              courseStudents ? courseStudents.push(student.data.data._id) : courseStudents = [student.data.data._id]
              
              Api.editCourse(courseName, null, null, null, null, null, null, null, null, null, courseStudents)
              .then(() => {
                swal({
                  title: '¡Enhorabuena!',
                  text: 'PAGO REALIZADO',
                  showConfirmButton: true,
                  timer: 1500
                })
              })
            } else {
              swal({
                type: 'error',
                title: '¡Error!',
                text: 'Revisa los datos del formulario y vuelve a intentarlo',
                showConfirmButton: true,
                timer: 2000
              })
            }
          })
        }
      })
    })
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
            <CardElement />
        <button>Confirmar Pago</button>
      </form>
      <form onSubmit={this.handleTest}>
        <button>Test</button>
      </form>
      </div>
    );
  }
}

export default injectStripe(PaymentForm);