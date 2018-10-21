import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import './PaymentForm.scss'
import {CardElement} from 'react-stripe-elements';
import Api from "../../../../api/vmApi"

class PaymentForm extends React.Component {
  
  handleSubmit = (e) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    e.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Jenny sRosen'})
    .then(({token}) => {
      console.log('Received Stripe token:', token.id);
      console.log(token);
      Api.sendPayment(token.id)
      .then(result=> console.log(result))
    })

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', owner: {
    //   name: 'Jenny Rosen'
    // }});
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