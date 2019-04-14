import React, { Component } from "react";
import * as firebase from 'firebase/app';
import 'firebase/auth'
import { withRouter } from "react-router-dom"
import Api from "../../../../api/vmApi"
import swal from 'sweetalert2'
import EditButton from '../../Buttons/editButton'
import DeleteButton from '../../Buttons/deleteButton'
import './Students.scss'
import tokenHelper from '../../../tokenHelper'

class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      login: false
    };
  }

  componentDidMount = () => {
    this.checkForLogin();
    tokenHelper.listStudents('')
    .then(students=> {
      this.setState({
        students: students.data.data
      })
    })
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

  handleDelete = (documentId, name, surname) => {
    swal({
      title: `¿Estás seguro de que quieres eliminar a ${name} ${surname}?`,
      text: "Una vez eliminado, no podrás volver atrás",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, lo quiero eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
          tokenHelper.deleteStudent(documentId)
              .then(() => {
                  swal({
                      title: '¡Estudiante eliminado!',
                      type: 'success',
                      showConfirmButton: false,
                      timer: 1500,
                      onOpen: () => {
                          swal.showLoading()
                      }
                  })
                  .then(() => {
                    tokenHelper.listStudents('')
                    .then(students => {
                      this.setState({
                        students: students.data.data
                      })
                    })
                  })
              })
      }
    })
  }

  handleEdit = (documentId) => {
    this.props.history.push(`/admin/students/manage/${documentId}`)
  }

  listStudentsByQuery = (e) => {
		tokenHelper.listStudents(e.target.value.trim()).then(students=> {
      this.setState({
        students: students.data.data
      })
		});
	};

  render() {
    const { login } = this.state;

    return (
      <React.Fragment>
        {
          login ?
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Estudiantes</h1>
                <input
                  onChange={(e) => this.listStudentsByQuery(e)}
                  className="form-control query"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Teléfono</th>
                      <th>E-mail</th>
                      <th>DNI</th>
                      <th></th>
                    </tr>
                  </thead>
                  {this.state.students ?
                    <tbody>
                      {this.state.students.map(student => {
                        return <tr key={student.documentId}>
                          <td>{student.name} {student.surname}</td>
                          <td>{student.phoneNumber}</td>
                          <td>{student.email}</td>
                          <td>{student.documentId}</td>
                          <td>
                            <DeleteButton
                              onClick={() => this.handleDelete(student.documentId, student.name, student.surname)} />
                            <EditButton
                              onClick={() => this.handleEdit(student.documentId)}
                            />
                          </td>
                        </tr>
                      })}
                    </tbody>
                    : undefined}
                </table>
              </div>
            </main>
            :
            ''
        }
      </React.Fragment>
    );
  }
}
export default withRouter(Students);