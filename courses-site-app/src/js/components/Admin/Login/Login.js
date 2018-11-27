import React, { Component } from 'react';
import './Login.scss'
import Modals from '../../utils/modals'
import firebase from 'firebase'


import { Link, withRouter } from 'react-router-dom';


class Login extends Component {

    constructor() {
        super()

        this.state = {
            email: "",
            password: "",

        }
    }

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
 
    handleSubmit = (e) => {

        console.log(e)
        e.preventDefault()
        const { email, password } = this.state

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() =>{
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .catch(function (error) {
                        const errorCode = error.code;
                        if (errorCode === 'auth/wrong-password') {
                            Modals.LoginError('Password')
                        } else {
                            Modals.LoginError('User')
                        }
                    })
            })
            .then(() => {
                this.props.onCheckForLogin()
            })
            .catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage)
              });
        
    }

    render() {
        return (
            <div className="wrapper">
                <section className="module-cover parallax fullscreen text-center" data-background="assets/images/module-5.jpg" data-overlay="0.65" data-gradient>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 m-auto">
                                <div className="m-b-20">
                                    <h6>Sign into your account</h6>
                                </div>
                                <div className="m-b-20">
                                    <form
                                        onSubmit={e => this.handleSubmit(e)}
                                        noValidate 
                                    >
                                        <div className="form-group">
                                            <input 
                                                onChange={e => this.handleOnChange(e)}
                                                className="form-control" 
                                                type="email" 
                                                placeholder="Email"
                                                name="email" 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                onChange={e => this.handleOnChange(e)}
                                                className="form-control" 
                                                type="password" 
                                                placeholder="Pasword"
                                                name="password" 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="btn btn-block btn-round btn-brand" type="submit" defaultValue="Guardar" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default withRouter(Login)