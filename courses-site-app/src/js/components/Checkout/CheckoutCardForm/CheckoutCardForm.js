import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedPaymentForm from './PaymentForm';

const CheckoutCardForm = (props) => {
  return (
    <div className="Checkout">
        <h1>Card details</h1>
        <Elements>
          <InjectedPaymentForm courseName={props.courseName} price={props.price} name={props.name}/>
        </Elements>
      </div>
  )
}

export default CheckoutCardForm;