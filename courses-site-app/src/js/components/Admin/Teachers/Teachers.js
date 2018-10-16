import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink, withRouter } from "react-router-dom"
import Api from "../../../../api/vmApi"
import swal from 'sweetalert2'
import EditButton from '../../Buttons/editButton'
import DeleteButton from '../../Buttons/deleteButton'

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

  newTeacher = () => {
    
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

  handleEdit = (id) => {
    this.props.history.push(`/admin/teachers/manage/${id}`)
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
            <NavLink to="/admin/teachers/manage">
              <button 
              className="btn btn-sm btn-outline-secondary"
              >
                  + Nuevo profesor
              </button>
            </NavLink>
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
                      <DeleteButton 
                      onClick={() => this.handleDelete(teacher.documentId, teacher.name, teacher.surname)}/>                      
                      <EditButton
                      onClick={()=> this.handleEdit(teacher._id)}
                       />
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