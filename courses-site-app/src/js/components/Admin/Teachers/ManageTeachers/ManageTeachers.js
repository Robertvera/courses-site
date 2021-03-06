import React, { Component } from "react";
import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import { withRouter } from "react-router-dom"
import Modals from '../../../../components/utils/modals'
import tokenHelper from '../../../../tokenHelper'

class ManageTeachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      documentId: '',
      occupation: '',
      titles: '',
      email: '',
      twitter: '',
      linkedin: '',
      phoneNumber: '',
      courses: '',
      modeEdition: false,
      login: false
    };
  }

  componentDidMount = () => {
    this.checkForLogin();
    if (this.props.match.params.teacher) {
      tokenHelper.retrieveTeacher(this.props.match.params.teacher)
      .then(teacher => {
        const {name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses} = teacher.data.data
        this.setState({
          name,
          surname,
          documentId,
          occupation,
          titles,
          email,
          twitter,
          linkedin,
          phoneNumber,
          courses,
          modeEdition: true
        })
      })
    }
  }

  checkForLogin = () => {
		let userLogin = false
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
			userLogin = true
			this.setState({ login: userLogin })
			} else {
			this.setState({ login: userLogin })
			}
		})
	}

  handleEdit = e => {
    e.preventDefault()
    const { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses }  = this.state

    tokenHelper.editTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses)
    .then(teacher => {
      teacher.data.status === 'OK' ?
      Modals.OK('Profesor', 'modificado')
        .then(this.props.history.push(`/admin/teachers/`))
        :
        Modals.KO('profesor', 'modificando')
    }
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, courses }  = this.state

    tokenHelper.createTeacher(name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber)
    .then(teacher => {
      teacher.data.status === 'OK' ?
      Modals.OK('Profesor', 'creado')
      .then(this.props.history.push(`/admin/teachers/`))
      :
      Modals.KO('profesor', 'creando')
    })

  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    const {name, surname, documentId, occupation, titles, email, twitter, linkedin, phoneNumber, modeEdition, login} = this.state
    const textButton = this.state.modeEdition ? 'Guardar' : 'Crear'

    return (
      <React.Fragment>
        {
          login ?

            <div className="container col-md-10 offset-md-2">
              <div className="row">
                <div className="col-md-12">
                  <div className="space" data-my="60px" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 pt-5">
                  <form
                    id="teachers-form"
                    method="post"
                    onSubmit={e => !this.state.modeEdition ? this.handleSubmit(e) : this.handleEdit(e)}
                    noValidate>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={name}
                            onChange={e => this.handleOnChange(e)}
                            required
                            disabled={modeEdition ? true : false}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="surname"
                            placeholder="Apellidos"
                            value={surname}
                            onChange={e => this.handleOnChange(e)}
                            required />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="documentId"
                            placeholder="DNI"
                            value={documentId}
                            onChange={e => this.handleOnChange(e)}
                            required
                            disabled={modeEdition ? true : false}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="occupation"
                            placeholder="Ocupación"
                            value={occupation}
                            onChange={e => this.handleOnChange(e)}
                            required />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="titles"
                            placeholder="Títulos"
                            value={titles}
                            onChange={e => this.handleOnChange(e)}
                            required />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => this.handleOnChange(e)}
                            required />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="twitter"
                            placeholder="Twitter"
                            value={twitter}
                            onChange={e => this.handleOnChange(e)}
                            required />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="linkedin"
                            placeholder="Linkedin"
                            value={linkedin}
                            onChange={e => this.handleOnChange(e)}
                            required />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="phoneNumber"
                            placeholder="Número de teléfono"
                            value={phoneNumber}
                            onChange={e => this.handleOnChange(e)}
                            required />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-12 mt-4">

                        <div className="text-center">
                          <input className="btn btn-circle btn-brand" type="submit" defaultValue={textButton} />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            :
            ''
        }
      </React.Fragment>
    );
  }
}
export default withRouter(ManageTeachers);