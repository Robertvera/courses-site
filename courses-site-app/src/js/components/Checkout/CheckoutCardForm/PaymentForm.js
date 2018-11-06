import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import './PaymentForm.scss'
import {CardElement} from 'react-stripe-elements';
import Api from "../../../../api/vmApi"
import swal from 'sweetalert2'
import {validateData, formatDate} from '../../../../../public/js/utils/utils'
import Modals from '../../../../../public/js/utils/modals'
import {thanks} from '../../../../../public/js/utils/mailTemplates'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'


class PaymentForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: false
		}
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
		})
	}
}

loadingScreen = (status) => {
	if (status === 'on') {
		let background = document.querySelector('#root')
		background.classList.add('blur')
	
		return <LoadingSpinner/>
	} else {
		let background = document.querySelector('#root')
		background.classList.remove('blur')
	}
}

  render() {
	  const { loading } = this.state
	return (
	  <form onSubmit={this.handleSubmit}>
	  		{loading ? this.loadingScreen('on') : this.loadingScreen('off')}
			<CardElement />
		<button>Confirmar Pago</button>
	  </form>
	);
  }

}

export default injectStripe(PaymentForm);