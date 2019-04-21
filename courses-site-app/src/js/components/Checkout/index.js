import React, { Component } from "react";
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer'
import CheckoutForm from './CheckoutForm/CheckoutForm'

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
            <CheckoutForm />
            <Footer/>
        </div>
    );
  }
}
export default Checkout;