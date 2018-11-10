import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedPaymentForm from './PaymentForm';

const CheckoutCardForm = (props) => {
  return (
    <div className="Checkout">
        <h1>Detalles de pago</h1>
        <Elements>
          <InjectedPaymentForm dataForm={props.dataForm} dataCourse={props.dataCourse}/>
        </Elements>
      </div>
  )
}

export default CheckoutCardForm;