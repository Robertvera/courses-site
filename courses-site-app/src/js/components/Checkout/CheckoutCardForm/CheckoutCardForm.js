import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedPaymentForm from './PaymentForm';

class CheckoutCardForm extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <h1>Card details</h1>
        <Elements>
          <InjectedPaymentForm />
        </Elements>
      </div>
    );
  }
}

export default CheckoutCardForm;