import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom"
import Api from "../../../../api/vmApi"
import swal from 'sweetalert2'

class Teachers extends Component {
  constructor() {
    super();
    this.state = {
      teachers: []
    };
  }

  listTeachers = () => {
    Api.listTeachers('')
    .then(teachers=> {
      this.setState({
        teachers: teachers.data.data
      })
    })
  }


  componentDidMount = () => {
    this.listTeachers()
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
          Api.deleteTeacher(documentId)
              .then(() => {
                  swal({
                      title: '¡Profesor eliminado!',
                      type: 'success',
                      showConfirmButton: false,
                      timer: 1500,
                      onOpen: () => {
                          swal.showLoading()
                      }
                  })
                  .then(() => {
                    this.listTeachers()
                  })
              })
      }
    })
  }

  handleEdit = (documentId) => {
    this.props.history.push(`/admin/teachers/manage/${documentId}`)
  }

  render() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Profesores</h1>    
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button className="btn btn-sm btn-outline-secondary">Share</button>
              <button className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar" />
                This week
            </button>
          </div>
        </div>  
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>DNI</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th></th>
              </tr>
            </thead>
            {this.state.teachers ?
            <tbody>
              {this.state.teachers.map(teacher => {
              return <tr key={teacher.documentId}>
                      <td>{teacher.name} {teacher.surname}</td>
                      <td>{teacher.documentId}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.phoneNumber}</td>
                      <td>
                      <button 
                      type="button" 
                      className="btn-sm btn-outline-danger"
                      onClick={() => this.handleDelete(teacher.documentId, teacher.name, teacher.surname)}
                      >
                      Borrar
                      </button>
                      <button
                      type="button"
                      className="btn-sm btn-outline-warning"
                      onClick={() => this.handleEdit(teacher.documentId)}
                      >
                      Editar
                      </button>
                      </td>
                    </tr>
              })}
            </tbody>
            : undefined}
          </table>
        </div>
      </main>
    );
  }
}
export default withRouter(Teachers);