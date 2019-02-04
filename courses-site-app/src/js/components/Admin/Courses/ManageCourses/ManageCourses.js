import React, { Component } from "react";
import swal from "sweetalert2";
import firebase from "firebase";
import { withRouter } from "react-router-dom";
import Api from "../../../../../api/vmApi";
import StudentsList from "../../Students/StudentsList"

class ManageCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      excerpt: "",
      price: "",
      image: "",
      pdf: "",
      capacity: "",
      location: "",
      date: "",
      teacher: "",
      students: [],
      teacherToFind: "",
      teachersList: [],
      uploadValuePDF: "",
      uploadValueIMG: "",
      editingCourse: false,
      login: false
    };
  }

  defaultState = () => {
    this.setState({
      name: "",
      description: "",
      excerpt: "",
      price: "",
      image: "",
      pdf: "",
      capacity: "",
      location: "",
      date: "",
      teacher: "",
      students:[],
      teacherToFind: "",
      teachersList: [],
      uploadValuePDF: "",
      uploadValueIMG: "",
      editingCourse: false,
      login: false
    });
  };

  componentDidMount() {
    this.checkForLogin()
    if (this.props.match) {
      const course = this.props.match.params.course;

      Api.retrieveCourse(course)
        .then(_course => {
          if (_course.data.status === "OK") {
            this.editCourse(_course.data.data[0]);
          } else {
            swal({
              type: "error",
              title: "Error al editar el curso",
              showConfirmButton: true,
              timer: 2000
            });
          }
        })
        .then(() => {
          this.findTeacherName();
        });
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

  editCourse(courseToEdit) {
    if (courseToEdit) {
      this.setState({
        name: courseToEdit.name || "",
        description: courseToEdit.description || "",
        excerpt: courseToEdit.excerpt || "",
        price: courseToEdit.price || "",
        image: courseToEdit.image || "",
        pdf: courseToEdit.pdf || "",
        capacity: courseToEdit.capacity || "",
        location: courseToEdit.location || "",
        date: courseToEdit.date || "",
        teacher: courseToEdit.teachers[0] || "",
        students: courseToEdit.students || "",
        editingCourse: true,
        uploadValuePDF: courseToEdit.pdf.length ? 100 : "",
        uploadValueIMG: courseToEdit.pdf.length ? 100 : ""
      });
    }
  }

  handleUploadPDF = e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const pdfRef = storageRef.child(file.name);
    const pdfRouteRef = storageRef.child(`/pdf/${file.name}`);

    pdfRef.name === pdfRouteRef.name;
    pdfRef.fullPath === pdfRouteRef.fullPath;

    pdfRouteRef.put(file).on(
      "state_changed",
      snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValuePDF: percentage
        });
      },
      error => {
        console.log(error.message);
      },
      () => {
        pdfRouteRef.getDownloadURL().then(url => {
          this.setState({
            uploadValuePDF: 100,
            pdf: url
          });
        });
      }
    );
  };

  handleUploadIMG = e => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(file.name);
    const imagesRouteRef = storageRef.child(`/image/${file.name}`);

    imageRef.name === imagesRouteRef.name;
    imageRef.fullPath === imagesRouteRef.fullPath;

    imagesRouteRef.put(file).on(
      "state_changed",
      snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValueIMG: percentage
        });
      },
      error => {
        console.log(error.message);
      },
      () => {
        imagesRouteRef.getDownloadURL().then(url => {
          this.setState({
            uploadValueIMG: 100,
            image: url
          });
        });
      }
    );
  };

  handleEdit = e => {
    e.preventDefault();
    const { name, description, excerpt, price, image, pdf, capacity, location, date, teacher } = this.state;

    Api.editCourse(
      name.trim().toLowerCase(),
      description,
      excerpt,
      price,
      image,
      pdf,
      capacity,
      location,
      date,
      teacher.length ? teacher : [],
      undefined
    )
      .then(course => {
        course.data.status === "OK"
          ? swal({
              title: "¡Curso editado!",
              showConfirmButton: true,
              timer: 1500
            }).then(this.props.history.push("/admin/courses"))
          : swal({
              type: "error",
              title: "Error editando el curso",
              showConfirmButton: true,
              timer: 2000
            });
      })
      .then(this.defaultState());
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, description, excerpt, price, image, pdf, capacity, location, date, teacher } = this.state;

    Api.createCourse(
      name.trim().toLowerCase(),
      description,
      excerpt,
      price,
      image,
      pdf,
      capacity,
      location,
      date,
      teacher.length ? teacher : [],
      undefined
    )
      .then(course => {
        course.data.status === "OK"
          ? swal({
              title: "¡Curso creado!",
              showConfirmButton: true,
              timer: 1500
            }).then(this.props.history.push("/admin/courses"))
          : swal({
              type: "error",
              title: "Error creando el curso",
              showConfirmButton: true,
              timer: 2000
            });
      })
      .then(this.defaultState());
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTeachers = e => {
    this.setState({ teacherToFind: e.target.value.trim() });
    if (this.state.teacherToFind.length >= 2) {
      Api.listTeachers(this.state.teacherToFind).then(_teachers => {
        this.setState({ teachersList: _teachers.data.data });
      });
    }
  };

  selectTeacherFromSuggested = (e, teacher) => {
    e.preventDefault();
    this.setState({
      teacher: teacher.teacher._id,
      teacherToFind: `${teacher.teacher.name} ${teacher.teacher.surname}`
    });
  };

  findTeacherName = () => {
    if (this.state.teacher.length) {
      Api.retrieveTeacher(this.state.teacher).then(_teacher => {
        if ((_teacher.data.data.status = "OK")) {
          const teacherName = `${_teacher.data.data.name} ${_teacher.data.data.surname}`;
          this.setState({ teacherToFind: teacherName });
        } else {
          console.error();
        }
      });
    }
  };

  render() {
    const { editingCourse, login, students } = this.state;
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
                    onSubmit={e => (!this.state.editingCourse ? this.handleSubmit(e) : this.handleEdit(e))}
                    id="courses-form"
                    method="post"
                    noValidate
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
                            defaultValue={this.state.name || ""}
                            disabled={editingCourse ? true : false}
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
                            defaultValue={this.state.date || ""}
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
                            value={this.state.description || ""}
                            rows={12}
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
                            defaultValue={this.state.excerpt || ""}
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
                            defaultValue={this.state.price || ""}
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
                            defaultValue={this.state.capacity || ""}
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
                            defaultValue={this.state.location || ""}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={e => this.handleTeachers(e)}
                            className="form-control"
                            type="text"
                            name="teacher"
                            placeholder="Profesor"
                            value={this.state.teacherToFind}
                          />
                          <p className="help-block text-danger" />
                        </div>
                        <div className="form-group">
                          <ul className="list-group">
                            {this.state.teachersList.length
                              ? this.state.teachersList.map(teacher => {
                                return (
                                  <button
                                    className="list-group-item bg-light text-secondary teachers-list"
                                    type="button"
                                    onClick={e => this.selectTeacherFromSuggested(e, { teacher })}
                                  >
                                    {teacher.name} {teacher.surname}
                                  </button>
                                );
                              })
                              : ""}
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <progress value={this.state.uploadValuePDF} mx="100" />
                            <br />
                            <span>Añadir PDF</span>
                            <input type="file" onChange={e => this.handleUploadPDF(e)} />
                          </div>
                          <div className="col-md-6">
                            <progress value={this.state.uploadValueIMG} mx="100" />
                            <br />
                            <span>Añadir Imagen</span>
                            <input type="file" onChange={e => this.handleUploadIMG(e)} />
                          </div>
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
              <StudentsList students={students} />
            </div>
            :
            ''
        }

      </React.Fragment>
    );
  }
}
export default withRouter(ManageCourses);
