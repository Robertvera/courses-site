import React, { Component } from "react";
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer'
import Api from '../../../api/vmApi'
import './Home.scss'
import {formatDate, formatText} from '../utils/utils'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            lastCourses: []
        };
      }

    componentDidMount = () => {
        Api.listCourses().then(courses => {
            const {data} = courses.data 
          this.setState({
              lastCourses: [data[0], data[1], data[2]]
          })
        })
      }

  render() {
    const {lastCourses} = this.state

    return (
        <div>
        <TopBar/>
        <div className="wrapper">
            <section className="module-cover parallax fullscreen text-center" id="home" data-background="../../../../public/images/adult-application-asian-733856.jpg" data-overlay="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="m-b-20">
                                <strong>Formación para terapeutas
                                <br /> ocupacionales, fisioterapeutas y
                                <br /> logopedas</strong>
                            </h1>
                            <p>
                                <a className="btn btn-circle btn-outline-new-white" href="/#/cursos">Ver cursos</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="module bg-gray">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <img src="../../../../public/images/notebook-vmb.png"/>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                    <h2>VMB FORMACIÓN</h2>
                    <p className="lead">CURSOS PARA TERAPEUTAS OCUPACIONALES, FISIOTERAPEUTAS Y LOGOPEDAS</p>
                    <div className="space" data-my="50px" />
                    <div className="icon-box icon-box-left">
                        <div className="icon-box-icon">
                        <span className="ti-user" />
                        </div>
                        <div className="icon-box-title">
                        <h6>¿Quienes somos?</h6>
                        </div>
                        <div className="icon-box-content">
                        <p>VMB Formación nace con el fin de ofrecer cursos de especialización a profesionales sanitarios
                            como terapeutas ocupacionales, fisioterapeutas y logopedas.</p>
                        </div>
                    </div>
                    <div className="icon-box icon-box-left">
                        <div className="icon-box-icon">
                        <span className="ti-map-alt" />
                        </div>
                        <div className="icon-box-title">
                        <h6>¿Dónde?</h6>
                        </div>
                        <div className="icon-box-content">
                        <p>Para que la formación llegue a todos los puntos de la geografía española VMB cuenta con diferentes
                            sedes en todo el país. En cada curso veréis las diferentes sedes y ciudades por las que
                            llevamos la formación (Barcelona, Madrid, Zaragoza, Córdoba, Sevilla, Bilbao, Málaga,
                            Granada…)
                        </p>
                        </div>
                    </div>
                    <div className="icon-box icon-box-left">
                        <div className="icon-box-icon">
                        <span className="ti-heart" />
                        </div>
                        <div className="icon-box-title">
                        <h6>Crecemos juntos</h6>
                        </div>
                        <div className="icon-box-content">
                        <p>Si tienes alguna propuesta, duda y/o comentario no dudes en ponerte en contacto con VMB a
                            través del formulario de contacto o al correo vmbformacion@gmail.com</p>
                        </div>
                    </div>
                    <div className="icon-box icon-box-left">
                        <div className="icon-box-icon">
                        <span className="ti-star" />
                        </div>
                        <div className="icon-box-title">
                        <h6>¿Para quién?</h6>
                        </div>
                        <div className="icon-box-content">
                        <p>Acercamos la formación a todos los profesionales.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
  
            <section className="module" id="team">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto text-center">
                    <h1>Nuestros docentes</h1>
                    <p className="lead">Profesionales del sector, con años de experiencia en formación y altamente cualificados.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="space" data-my="60px" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="team-image">
                        <img src="../../../../public/images/team/1.jpg"/>
                        <div className="team-wrap">
                            <div className="team-content">
                            <h6 className="team-name">Albert Giménez</h6>
                            <div className="team-role">Terapeuta Ocupacional</div>
                            </div>
                            <div className="team-content-social">
                            <ul>
                                <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fab fa-linkedin" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="team-image">
                        <img src="../../../../public/images/team/2.jpg"/>
                        <div className="team-wrap">
                            <div className="team-content">
                            <h6 className="team-name">Facundo Caloggero</h6>
                            <div className="team-role">Lic. Kinesiología y Fisiatría</div>
                            </div>
                            <div className="team-content-social">
                            <ul>
                                <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fab fa-linkedin" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="team-image">
                        <img src="../../../../public/images/team/3.jpg"/>
                        <div className="team-wrap">
                            <div className="team-content">
                            <h6 className="team-name">Patricia Murciego</h6>
                            <div className="team-role">Logopeda</div>
                            </div>
                            <div className="team-content-social">
                            <ul>
                                <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fab fa-linkedin" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="team-image">
                        <img src="../../../../public/images/team/4.jpg"/>
                        <div className="team-wrap">
                            <div className="team-content">
                            <h6 className="team-name">Laia Sallés</h6>
                            <div className="team-role">Dra. en Fisioterapia</div>
                            </div>
                            <div className="team-content-social">
                            <ul>
                                <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fab fa-linkedin" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="team-image">
                        <img src="../../../../public/images/team/5.jpg"/>
                        <div className="team-wrap">
                            <div className="team-content">
                            <h6 className="team-name">María González</h6>
                            <div className="team-role">Terapeuta Ocupacional</div>
                            </div>
                            <div className="team-content-social">
                            <ul>
                                <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fab fa-linkedin" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="team-image">
                        <img src="../../../../public/images/team/6.jpg"/>
                        <div className="team-wrap">
                            <div className="team-content">
                            <h6 className="team-name">Armando Rodríguez</h6>
                            <div className="team-role">Fisioterapeuta</div>
                            </div>
                            <div className="team-content-social">
                            <ul>
                                <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i className="fab fa-linkedin" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="space" data-my="30px" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <p className="text-center">
                        <a className="btn btn-circle btn-outline-brand" href="/#/cursos">Ver cursos</a>
                    </p>
                    </div>
                </div>
                </div>
            </section>
  
            <section className="module bg-gray" id="blog">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto text-center">
                    <h1>Últimos cursos</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="space" data-my="60px" />
                    </div>
                </div>
                {lastCourses.length >= 3 ?
                <div className="row row-post-masonry">
                    <div className="col-md-4 post-item">

                    <article className="post">
                        <div className="post-preview">
                        <a href={`/#/detalles/${lastCourses[0].name}`}>
                            <img src={lastCourses[0].image}/>
                        </a>
                        </div>
                        <div className="post-wrapper">
                        <div className="post-header">
                            <h2 className="post-title">
                            <a href={`/#/detalles/${lastCourses[0].name}`}>{formatText(lastCourses[0].name)}</a>
                            </h2>
                        </div>
                        <div className="post-content">
                            <ul>
                            <li>
                                <i className="ti-calendar" />
                                <strong>Fecha:</strong> {formatDate(lastCourses[0].date)}
                            </li>
                            <li>
                                <i className="ti-location-pin" />
                                <strong>Localización:</strong> {lastCourses[0].location}
                            </li>
                            </ul>
                            <p>
                            <a href={`/#/detalles/${lastCourses[0].name}`}>Ver curso</a>
                            </p>
                        </div>
                        </div>
                    </article>

                    </div>
                    <div className="col-md-4 post-item">

                    <article className="post">
                        <div className="post-preview">
                        <a href={`/#/detalles/${lastCourses[1].name}`}>
                            <img src={lastCourses[1].image}/>
                        </a>
                        </div>
                        <div className="post-wrapper">
                        <div className="post-header">
                            <h2 className="post-title">
                            <a href={`/#/detalles/${lastCourses[1].name}`}>{formatText(lastCourses[1].name)}</a>
                            </h2>
                        </div>
                        <div className="post-content">
                            <ul>
                            <li>
                                <i className="ti-calendar" />
                                <strong>Fechas:</strong> {formatDate(lastCourses[1].date)}
                            </li>
                            <li>
                                <i className="ti-location-pin" />
                                <strong>Localización:</strong> {lastCourses[1].location}
                            </li>
                            </ul>
                            <p>
                            <a href={`/#/detalles/${lastCourses[1].name}`}>Ver curso</a>
                            </p>
                        </div>
                        </div>
                    </article>
                    
                    </div>
                    <div className="col-md-4 post-item">

                    <article className="post">
                        <div className="post-preview">
                        <a href={`/#/detalles/${lastCourses[2].name}`}>
                            <img src={lastCourses[2].image}/>
                        </a>
                        </div>
                        <div className="post-wrapper">
                        <div className="post-header">
                            <h2 className="post-title">
                            <a href={`/#/detalles/${lastCourses[2].name}`}>{formatText(lastCourses[2].name)}</a>
                            </h2>
                        </div>
                        <div className="post-content">
                            <ul>
                            <li>
                                <i className="ti-calendar" />
                                <strong>Fechas:</strong> {formatDate(lastCourses[2].date)}
                            </li>
                            <li>
                                <i className="ti-location-pin" />
                                <strong>Localización:</strong> {lastCourses[2].location}
                            </li>
                            </ul>
                            <p>
                            <a href={`/#/detalles/${lastCourses[2].name}`}>Ver curso</a>
                            </p>
                        </div>
                        </div>
                    </article>
                    </div>
                </div>
                : null}
                </div>
            </section>

            <section className="module parallax" data-background="../../../../public/images/classroom.jpg" data-overlay="0.5">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="space" data-my="50px" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <div className="review-card">
                        <div className="review-card-content">
                        <p>Map where your photos were taken and discover local points of interest. Map where your photos.</p>
                        </div>
                        <div className="review-card-author">
                        <div className="review-card-author-photo">
                            <img src="../../../../public/images/avatar/1.jpg"/>
                        </div>
                        <div className="review-card-author-info">
                            <h6 className="review-card-author-title">Emma Connor</h6>
                            <span className="star-rating star-rating-4" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="review-card">
                        <div className="review-card-content">
                        <p>Map where your photos were taken and discover local points of interest. Map where your photos.</p>
                        </div>
                        <div className="review-card-author">
                        <div className="review-card-author-photo">
                            <img src="../../../../public/images/avatar/1.jpg"/>
                        </div>
                        <div className="review-card-author-info">
                            <h6 className="review-card-author-title">Emma Connor</h6>
                            <span className="star-rating star-rating-4" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="review-card">
                        <div className="review-card-content">
                        <p>Map where your photos were taken and discover local points of interest. Map where your photos.</p>
                        </div>
                        <div className="review-card-author">
                        <div className="review-card-author-photo">
                            <img src="../../../../public/images/avatar/1.jpg"/>
                        </div>
                        <div className="review-card-author-info">
                            <h6 className="review-card-author-title">Emma Connor</h6>
                            <span className="star-rating star-rating-4" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="space" data-my="50px" />
                    </div>
                </div>
                </div>
            </section>

            <section className="module divider-top" id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-9 m-auto text-center">
                    <h1>Convenios y colaboradores</h1>
                    <p className="lead">Los Colegios profesionales y asociaciones que aparecen a continuación colaboran con VMB FORMACION,
                        por lo tanto, sus colegiad@s y asociad@s disfrutan de un 10% de descuento en todas nuestras acciones
                        formativas.
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="space" data-my="60px" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 m-auto">
                    <div className="owl-carousel clients-carousel">
                        <div className="client">
                        <img src="../../../../public/images/partners/apato-ico2.png"/>
                        </div>
                        <div className="client">
                        <img src="../../../../public/images/partners/aptoca-ico2.png"/>
                        </div>
                        <div className="client">
                        <img src="../../../../public/images/partners/coptoa-ico2.png"/>
                        </div>
                        <div className="client">
                        <img src="../../../../public/images/partners/coptocyl-ico2.png"/>
                        </div>
                        <div className="client">
                        <img src="../../../../public/images/partners/coptoex-ico2.png"/>
                        </div>
                        <div className="client">
                        <img src="../../../../public/images/partners/coptopa-ico2.png"/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    </div>
    <Footer/>
    </div>
    );
  }
}
export default Home;