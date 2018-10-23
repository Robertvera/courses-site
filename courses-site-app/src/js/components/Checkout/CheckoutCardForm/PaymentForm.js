import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import './PaymentForm.scss'
import {CardElement} from 'react-stripe-elements';
import Api from "../../../../api/vmApi"

class PaymentForm extends React.Component {
    
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.stripe.createToken({name: this.props.name})
    .then(({token}) => {
      console.log('Received Stripe token:', token.id);
      console.log(token);
      Api.sendPayment(token.id, this.props.courseName, this.props.price)
      .then(result=> console.log(result))
    })
  };

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