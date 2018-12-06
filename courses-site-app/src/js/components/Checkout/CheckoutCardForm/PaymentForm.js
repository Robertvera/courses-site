import React from 'react';
import { withRouter } from "react-router-dom"
import {injectStripe} from 'react-stripe-elements';
import './PaymentForm.scss'
import {CardElement} from 'react-stripe-elements';
import Api from "../../../../api/vmApi"
import {validateData, formatDate} from '../../utils/utils'
import Modals from '../../utils/modals'
import {thanks} from '../../utils/mailTemplates'


class PaymentForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false
		}
	}

redirectToHome = () => {
	return this.props.history.push(`/`)
}
  
handleSubmit = (e) => {
	e.preventDefault();
	const dataCheck = validateData(this.props.dataForm)
	//VALIDAR DATOS
	if (dataCheck !== 'OK') {
		Modals.FormError(dataCheck)
	} else { 
		//CREAR USER
		const { name, surname, dni, address, cp, city, email, phone } = this.props.dataForm
		const { course, courseName, location, date } = this.props.dataCourse
		let { courseStudents } = this.props.dataCourse

		this.setState({loading: true}, ()=> {
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
							this.setState({loading: false})
							console.log(result)
							if (result.data.status === 'OK') {
								Modals.PaymentOK()
								.then(()=> {
									Api.emailToStudent(email, thanks(name, surname, courseName, location, formatDate(date)) )
								})
								.then(()=> {
									this.redirectToHome()
								})
							} else {
								this.setState({loading: false})
								Modals.UnknownError()
								.then(()=> {
									Api.deleteStudent(dni)
								})
							}
						})
					})
					.catch(err=> {
						this.setState({loading: false})
						Modals.WrongCard()
						.then(()=> {
							Api.deleteStudent(dni)
						})
					})
				})
				.catch(err=> {
					this.setState({loading: false})
					Modals.UnknownError()
					.then(()=> {
						Api.deleteStudent(dni)
					})
				})
			}
		})
		.catch(err => {
			this.setState({loading: false})
			Modals.UnknownError()
		})
		})
	}
}

  render() {
	  const { loading } = this.state
	return (
		<div>
			<form onSubmit={this.handleSubmit}>
					<CardElement />
				<button>Confirmar Pago</button>
			</form>
			{loading ? Modals.Loading() : Modals.CloseLoading()}
		</div>
	);
  }

}

export default withRouter(injectStripe(PaymentForm));