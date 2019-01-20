import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer'
import Api from "../../../api/vmApi"
import './Contact.scss'
import {contactUs} from '../utils/mailTemplates'
import { MessageSent } from '../utils/modals'
import Recaptcha from '../utils/recaptcha'

class Contact extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        email: '',
        message: '',
        phone: ''
    };
  }

  redirectToHome = () => {
	return this.props.history.push(`/`)
}

  handleSubmit = e => {
      e.preventDefault();
      const { name, email, message, phone } = this.state
      if (name && email) {
          Api.emailToStudent('vmbformacion@gmail.com', contactUs(name, email, message, phone))
          .then ((data)=> {
              MessageSent()
              .then(()=> {
                  this.redirectToHome()
              })
          })
      }
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
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
                    <form 
                    id="contact-form" 
                    method="post" 
                    noValidate
                    onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                        <div className="form-group">
                            <input 
                            className="form-control" 
                            type="text" 
                            name="name" 
                            placeholder="Nombre" 
                            required={true} 
                            onChange={e => this.handleOnChange(e)}/>
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-group">
                            <input 
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="E-mail" 
                            required={true}
                            onChange={e => this.handleOnChange(e)}/>
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-group">
                            <input 
                            className="form-control" 
                            type="text" 
                            name="phone" 
                            placeholder="Teléfono" 
                            onChange={e => this.handleOnChange(e)}/>
                            <p className="help-block text-danger" />
                        </div>
                        </div>
                        <div className="col-md-12">
                        <div className="form-group">
                            <textarea 
                            className="form-control" 
                            name="message" 
                            placeholder="Mensaje" 
                            rows={12} 
                            required={true}
                            defaultValue={""} 
                            onChange={e => this.handleOnChange(e)}/>
                        </div>
                        </div>
                        <div className="col-md-12">
                        <p />
                        <div className="text-center form-send-row">
                            <Recaptcha />
                            <input className="btn btn-circle btn-brand" type="submit" value="Enviar mensaje" />
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
export default withRouter(Contact);