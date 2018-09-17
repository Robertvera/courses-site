import React, { Component } from "react";
import ReactDOM from "react-dom";
import Api from "../../../../../api/vmApi"
import swal from 'sweetalert2'
import firebase from 'firebase'

class ManageCourses extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: 'hello',
      excerpt: '',
      price: '',
      image: '',
      pdf: '',
      capacity: '',
      location: '',
      date: '',
      teacher: '',
      uploadValue: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  handleUpload = (e) => {
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref(`/PDF/${file.name}`)
    const task = storageRef.put(file)

    task.on('state_changed', snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        this.setState({
            uploadValue: percentage
        })
    }, error => {
        console.log(error.message)
    }, () => {
        this.setState({
            uploadValue: 100,
            pdf: task.snapshot.metadata.fullPath
        })
    })
}

  handleSubmit = e => {
    e.preventDefault()
    const { name, description, excerpt, price, image, pdf, capacity, location, date }  = this.state
    
    Api.createCourse(name.trim().toLowerCase(), description, excerpt, price, image, pdf, capacity, location, date)
      .then(course => {
        course.data.status === 'OK' ?
          swal({
            title: '¡Curso creado!',
            showConfirmButton: true,
            timer: 1500
          })
          :
          swal({
            type: 'error',
            title: 'Error creando el curso',
            showConfirmButton: true,
            timer: 2000
          })
      }
      )
      .then(
        this.setState({
          name: '',
          description: '',
          excerpt: '',
          price: '',
          image: '',
          pdf: '',
          capacity: '',
          location: '',
          date: '',
          teacher: '',
          uploadValue: ''
        })
      )
  }  


    handleOnChange = e => {
      this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (

      <div className="container col-md-10 offset-md-2">
        <div className="row">
          <div className="col-md-12">
            <div className="space" data-my="60px" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 pt-5">
            <form 
            onSubmit={e => this.handleSubmit(e)}
            id="courses-form" method="post" noValidate
            >
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                    onChange={e => this.handleOnChange(e)} 
                    className="form-control" 
                    type="text" 
                    name="name" 
                    placeholder="Nombre curso" 
                    required
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)}
                    className="form-control" 
                    type="date" 
                    name="date" 
                    placeholder="Fecha"  
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea 
                    onChange={e => this.handleOnChange(e)}
                    className="form-control" 
                    name="description" 
                    placeholder="Descripción curso" 
                    rows={12}  
                    defaultValue={this.state.description || ""} 
                    />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-group">
                    <input
                    onChange={e => this.handleOnChange(e)}
                    className="form-control" 
                    type="text" 
                    name="excerpt" 
                    placeholder="Resumen"  
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <input
                    onChange={e => this.handleOnChange(e)} 
                    className="form-control" 
                    type="number" 
                    name="price" 
                    placeholder="Precio"  
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <input
                    onChange={e => this.handleOnChange(e)} 
                    className="form-control" 
                    type="number" 
                    name="capacity" 
                    placeholder="Capacidad"  
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="form-group">
                    <input
                    onChange={e => this.handleOnChange(e)} 
                    className="form-control" 
                    type="text" 
                    name="location" 
                    placeholder="Localización"  
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input 
                    onChange={e => this.handleOnChange(e)}
                    className="form-control" 
                    type="text" 
                    name="teacher" 
                    placeholder="Profesor"  
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <progress value={this.state.uploadValue} mx="100"></progress>
                      <br />
                      <span>Añadir PDF</span>
                      <input 
                      type="file" 
                      onChange={e => this.handleUpload(e)} 
                      />
                      {/* <img src="https://michilot.com/wp-content/uploads/2017/12/pdficon.png" width="50" height="50" /> */}
                    </div>
                    {/* <div className="col-md-6">
                      <img src="http://cdn.onlinewebfonts.com/svg/img_148071.png" width="50" height="37" />
                      <span>imagendeprueba.jpg</span>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-12 mt-4">

                  <div className="text-center">
                    <input className="btn btn-circle btn-brand" type="submit" defaultValue="Guardar" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>





    );
  }
}
export default ManageCourses;