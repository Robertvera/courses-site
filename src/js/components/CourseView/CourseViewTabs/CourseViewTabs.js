import React, { Component } from "react";
import ReactDOM from "react-dom";
import './CourseViewTabs.scss'

class CourseViewTabs extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
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
                                    <p>En la década del setenta fue desarrollado un nuevo método de realizar vendajes con una tela adhesiva y elástica. Ésta fue
                                      creada para favorecer el movimiento articular, cambiando uno de los paradigmas más ancestrales en el tratamiento a través
                    del vendaje</p>
                                    <p>Con la llegada de la investigación del tejido fascial en estas últimas dos décadas se comenzaron a encontrar nuevos fundamentos
                                      fisiológicos, circulatorios y neurológicos que permiten un abordaje diferente tanto en las patologías agudas como en el concepto
                    de la reeducación de los patrones motores.</p>
                                    <p>El Taping Neuro Fascial nace a partir de la creación del Dr. Kenzo Kase, pero con la sumatoria de las investigaciones realizadas
                    tanto con el tape adhesivo elástico como sobre las fascias evolucionó tanto el concepto como sus aplicaciones terapéuticas.</p>
                                    <p />
                                </div>
                                <div className="tab-pane fade" id="course-teacher">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Title</th>
                                                <th>Info</th>
                                            </tr>
                                            <tr>
                                                <td>Compositions</td>
                                                <td>Jeans</td>
                                            </tr>
                                            <tr>
                                                <td>Size</td>
                                                <td>44, 46, 48</td>
                                            </tr>
                                            <tr>
                                                <td>Color</td>
                                                <td>Black</td>
                                            </tr>
                                            <tr>
                                                <td>Brand</td>
                                                <td>Somebrand</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade" id="shop-comment">
                                    {/* Comments area*/}
                                    <div className="comments-area-shop">
                                        <div className="comment-list-shop">
                                            {/* Comment*/}
                                            <div className="comment-shop">
                                                <div className="comment-author-shop">
                                                    <img className="avatar" src="assets/images/avatar/1.jpg" alt />
                                                </div>
                                                <div className="comment-body-shop">
                                                    <div className="comment-meta-shop">
                                                        <div className="comment-meta-author-shop">
                                                            <a href="#">Jason Ford</a>
                                                        </div>
                                                        <div className="comment-meta-date-shop">
                                                            <a href="#">May 5, 2015 at 4:51 am</a>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content-shop">
                                                        <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan
                                                          sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
                                                          proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod
                                                          Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking
                              vinegar jean shorts fixie consequat flexitarian four loko.</p>
                                                        <p>
                                                            <span className="star-rating star-rating-4" />
                                                        </p>
                                                    </div>
                                                    <div className="comment-reply-shop">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                </div>
                                                {/* Subcomment*/}
                                                <div className="children">
                                                    <div className="comment-shop">
                                                        <div className="comment-author-shop">
                                                            <img className="avatar" src="assets/images/avatar/2.jpg" alt />
                                                        </div>
                                                        <div className="comment-body-shop">
                                                            <div className="comment-meta-shop">
                                                                <div className="comment-meta-author-shop">
                                                                    <a href="#">Manager</a>
                                                                </div>
                                                                <div className="comment-meta-date-shop">
                                                                    <a href="#">May 5, 2015 at 4:51 am</a>
                                                                </div>
                                                            </div>
                                                            <div className="comment-content-shop">
                                                                <p>Sound Good!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Subcomment*/}
                                                <div className="children">
                                                    <div className="comment-shop">
                                                        <div className="comment-author-shop">
                                                            <img className="avatar" src="assets/images/avatar/4.jpg" alt />
                                                        </div>
                                                        <div className="comment-body-shop">
                                                            <div className="comment-meta-shop">
                                                                <div className="comment-meta-author-shop">
                                                                    <a href="#">Manager</a>
                                                                </div>
                                                                <div className="comment-meta-date-shop">
                                                                    <a href="#">May 5, 2015 at 4:51 am</a>
                                                                </div>
                                                            </div>
                                                            <div className="comment-content-shop">
                                                                <p>Thank you!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Comment*/}
                                            <div className="comment-shop">
                                                <div className="comment-author-shop">
                                                    <img className="avatar" src="assets/images/avatar/3.jpg" alt />
                                                </div>
                                                <div className="comment-body-shop">
                                                    <div className="comment-meta-shop">
                                                        <div className="comment-meta-author-shop">
                                                            <a href="#">Henry Cain</a>
                                                        </div>
                                                        <div className="comment-meta-date-shop">
                                                            <a href="#">May 5, 2015 at 4:51 am</a>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content-shop">
                                                        <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan
                                                          sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
                                                          proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod
                                                          Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking
                              vinegar jean shorts fixie consequat flexitarian four loko.</p>
                                                        <p>
                                                            <span className="star-rating star-rating-4" />
                                                        </p>
                                                    </div>
                                                    <div className="comment-reply-shop">
                                                        <a href="#">Reply</a>
                                                    </div>
                                                </div>
                                                {/* Subcomment*/}
                                                <div className="children">
                                                    <div className="comment-shop">
                                                        <div className="comment-author-shop">
                                                            <img className="avatar" src="assets/images/avatar/2.jpg" alt />
                                                        </div>
                                                        <div className="comment-body-shop">
                                                            <div className="comment-meta-shop">
                                                                <div className="comment-meta-author-shop">
                                                                    <a href="#">Manager</a>
                                                                </div>
                                                                <div className="comment-meta-date-shop">
                                                                    <a href="#">May 5, 2015 at 4:51 am</a>
                                                                </div>
                                                            </div>
                                                            <div className="comment-content-shop">
                                                                <p>Thank you!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-respond">
                                            <h5 className="comment-reply-title">Add Review</h5>
                                            <p className="comment-notes">Your email address will not be published. Required fields are marked</p>
                                            <form className="comment-form row">
                                                <div className="form-group col-md-4">
                                                    <input className="form-control" type="text" placeholder="Name" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <input className="form-control" type="text" placeholder="Email" />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <select className="form-control">
                                                        <option selected="selected">Your Rating</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <textarea className="form-control" rows={8} placeholder="Comment" defaultValue={""} />
                                                </div>
                                                <div className="form-submit col-md-12">
                                                    <button className="btn btn-dark" type="submit">Post Comment</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Comments area end*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default CourseViewTabs;