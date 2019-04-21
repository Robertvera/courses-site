import React from 'react';
import { withRouter } from "react-router-dom"
import {injectStripe} from 'react-stripe-elements';
import './PaymentForm.scss'
import {CardElement} from 'react-stripe-elements';
import Api from "../../../../api/vmApi"
import { validateData } from '../../utils/utils'
import Modals from '../../utils/modals'

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

	if (dataCheck !== 'OK') {
		Modals.FormError(dataCheck)
	} else {
		const { name } = this.props.dataForm

		this.setState({loading: true}, ()=> {
			this.props.stripe.createToken({ name })
			.then(({token}) => {
				Api.sendPayment(token.id, this.props.dataCourse.courseName, this.props.dataCourse.coursePrice, this.props.dataCourse, this.props.dataForm)
				.then(result => {
					this.setState({ loading: false })
					if (result.data.status === 'OK') {
						Modals.PaymentOK()
						.then(()=> {
							this.redirectToHome()
						})
					} else {
						this.setState({loading: false})
						Modals.UnknownError()
					}
				})
				.catch(err => {
					this.setState({loading: false})
					Modals.UnknownError()
				})
			})
			.catch(err => {
				this.setState({loading: false})
				Modals.WrongCard()
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