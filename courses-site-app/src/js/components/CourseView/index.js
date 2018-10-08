import React, { Component } from "react";
import ReactDOM from "react-dom";
import CourseViewHeader from './CourseViewHeader/CourseViewHeader'
import Api from '../../../api/vmApi'
import swal from 'sweetalert2'

class CourseView extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        description: '',
        excerpt: '',
        price: '',
        image: '',
        pdf: '',
        capacity: '',
        location: '',
        date: '',
        teacher: ''
    };
}

componentDidMount() {

    if(this.props.match) {
      
      const course = this.props.match.params.course

      Api.retrieveCourse(course).then(_course => {
        if (_course.data.status === 'OK') {
          const courseToShow = _course.data.data[0]
          const descriptionFormated = courseToShow.description.split('\n').map((item, key) => {
            return <p key={key}>{item}</p>
          })

          this.setState({
            name: courseToShow.name || '',
            description: descriptionFormated || '',
            excerpt: courseToShow.excerpt || '',
            price: courseToShow.price || '',
            image: courseToShow.image || '',
            pdf: courseToShow.pdf || '',
            capacity: courseToShow.capacity || '',
            location: courseToShow.location || '',
            date: courseToShow.date || '',
            teacher: courseToShow.teacher || ''
          })
          console.log(this.state)
        } else {
          swal({
            type: 'error',
            title: 'No se puede mostrar este curso ahora',
            showConfirmButton: true,
            timer: 2000
          })
        }
      })
    }
  }
render() {
  const { name, description, excerpt, price, image, pdf, capacity, location, date, teacher } = this.state
  console.log({ name, description, excerpt, price, image, pdf, capacity, location, date, teacher })
    return (
      <div className='container'>
          <CourseViewHeader />
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="shop-single-item-photos">
                  <img src={image} alt />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="shop-single-item">
                  <h2 className="shop-single-item-title">{name}</h2>
                  <div className="shop-single-item-rating">
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </span>
                    <a href="#">(2 customer reviews)</a>
                  </div>
                  <h2 className="shop-single-item-price">{price}€</h2>
                  <div className="shop-single-item-description">
                    <p>{excerpt}</p>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <a className="btn btn-block btn-dark" href="#">Comprar curso</a>
                    </div>
                  </div>
                  <hr className="m-t-30 m-b-30" />
                  <hr className="m-t-30 m-b-30" />
                  <div className="info-list">
                    <li>
                      <span className="info-list-title">Share:</span>
                      <span>
                        <ul className="social-icons">
                          <li>
                            <a href="#">
                              <i className="ti-twitter">Twitter</i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti-instagram">Instagram</i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti-facebook">Facebook</i>
                            </a>
                          </li>
                        </ul>
                      </span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="module no-gutter p-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-tabs justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#course-description">
                      <h6>Tema y fundamentación</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#course-teacher">
                      <h6>Docente</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#shop-comment">
                      <h6>Reviews (2)</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="shop-tab-content tab-content">
                  <div className="tab-pane fade show active" id="course-description">
                    {description}
                  </div>
                  <div className="tab-pane fade" id="course-teacher">
                    <p>{teacher}</p>
                  </div>
                  <div className="tab-pane fade" id="shop-comment">
                    <p>Comments? Nothing?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
export default CourseView;