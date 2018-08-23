import React, { Component } from "react";
import ReactDOM from "react-dom";
import CheckoutForm from './CheckoutForm/CheckoutForm'
import CheckoutHeader from './CheckoutHeader/CheckoutHeader'

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <div>
            <CheckoutHeader />
            <CheckoutForm />
        </div>
    );
  }
}
export default Checkout;