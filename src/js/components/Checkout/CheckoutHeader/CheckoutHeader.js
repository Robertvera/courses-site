import React, { Component } from "react";
import ReactDOM from "react-dom";
import './CheckoutHeader.scss'

class CheckoutHeader extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <section className="module-page-title bg-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="page-title-desc">
                                <h1 className="page-title-heading">Checkout</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Checkout</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default CheckoutHeader;