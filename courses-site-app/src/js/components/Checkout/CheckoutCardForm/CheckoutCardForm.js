import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedPaymentForm from './PaymentForm';

const CheckoutCardForm = (props) => {
  return (
    <div className="Checkout">
        <h1>Card details</h1>
        <Elements>
          <InjectedPaymentForm data={props.data}/>
        </Elements>
      </div>
  )
}

export default CheckoutCardForm;