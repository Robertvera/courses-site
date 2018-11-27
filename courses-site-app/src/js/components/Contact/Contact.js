import React, { Component } from "react";
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer'
import './Contact.scss'

class Contact extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <div>
        <TopBar/>
        <section className="module divider-top">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-9 m-auto text-center">
                    <h1>Contáctanos</h1>
                    <p className="lead">¿Tienes dudas, preguntas, suggerencias o simplemente quieres decir hola? ¡Escríbenos! Vuestros comentarios nos ayudan a mejorar.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="space" data-my="60px" />
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <form id="contact-form" method="post" noValidate>
                    <div className="row">
                        <div className="col-md-4">
                        <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Nombre" required="true" />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="E-mail" required="true" />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-group">
                            <input className="form-control" type="text" name="subject" placeholder="Teléfono" required="true" />
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className="form-group">
                            <textarea className="form-control" name="message" placeholder="Mensaje" rows={12} required="true" defaultValue={""} />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <p />
                        <div className="text-center">
                            <input className="btn btn-circle btn-brand" type="submit" defaultValue="Enviar mensaje" />
                        </div>
                        </div>
                    </div>
                    </form>
                    <div className="ajax-response text-center" id="contact-response" />
                </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    );
  }
}
export default Contact;