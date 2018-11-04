import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import './PaymentForm.scss'
import {CardElement} from 'react-stripe-elements';
import Api from "../../../../api/vmApi"
import swal from 'sweetalert2'
import {validateData} from '../../../../../public/js/utils/utils'
import Modals from '../../../../../public/js/utils/modals'
import {thanks} from '../../../../../public/js/utils/mailTemplates'


class PaymentForm extends React.Component {
  
handleSubmit = (e) => {
	e.preventDefault();
	const dataCheck = validateData(this.props.dataForm)
	//VALIDAR DATOS
	if (dataCheck !== 'OK') {
		Modals.FormError(dataCheck)
	} else { 
		//CREAR USER
		const { name, surname, dni, address, cp, city, email, phone } = this.props.dataForm
		const { course, courseName } = this.props.dataCourse
		let { courseStudents } = this.props.dataCourse

		Api.createStudent(name, surname, dni, address, cp, city, email, phone, course)
		.then(student => {
			if (student.data.status === 'OK') {
				courseStudents ? courseStudents.push(student.data.data._id) : courseStudents = [student.data.data._id]

				Api.editCourse(courseName, null, null, null, null, null, null, null, null, null, courseStudents)
				.then(()=> {
					this.props.stripe.createToken({name})
					.then(({token}) => {
						console.log(token)
						Api.sendPayment(token.id, this.props.dataCourse.courseName, this.props.dataCourse.coursePrice)
						.then(result=> {
							console.log(result)
							if (result.data.status === 'OK') {
								Modals.PaymentOK()
								.then(()=> {
									Api.emailToStudent(email, thanks(name, surname, courseName, city) )
								})
							} else {
								Modals.UnknownError()
								.then(()=> {
									Api.deleteStudent(dni)
								})
							}
						})
					})
					.catch(err=> {
						Modals.WrongCard()
						.then(()=> {
							Api.deleteStudent(dni)
						})
					})
				})
				.catch(err=> {
					Modals.UnknownError()
					.then(()=> {
						Api.deleteStudent(dni)
					})
				})
			}
		})
		.catch(err => {
			Modals.UnknownError()
		})
	}
}

  render() {
	return (
	  <form onSubmit={this.handleSubmit}>
			<CardElement />
		<button>Confirmar Pago</button>
	  </form>
	);
  }

}

export default injectStripe(PaymentForm);