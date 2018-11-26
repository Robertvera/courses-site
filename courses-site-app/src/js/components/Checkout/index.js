import React, { Component } from "react";
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer'
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
            <TopBar/>
            <CheckoutHeader />
            <CheckoutForm />
            <Footer/>
        </div>
    );
  }
}
export default Checkout;