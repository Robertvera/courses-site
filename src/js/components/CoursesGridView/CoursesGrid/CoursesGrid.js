import React, { Component } from "react";
import ReactDOM from "react-dom";
import './CoursesGrid.scss'

class CoursesGrid extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="shop-grid-item">
                  <div className="shop-item-thumb">
                    <a href="#">
                      <img src="https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388" alt />
                    </a>
                    <div className="shop-item-hidden">
                      <a className="btn btn-new-white" href="#">Ver más información</a>
                    </div>
                  </div>
                  <div className="shop-item-captions">
                    <h6 className="shop-item-title">Nombre del curso número 1</h6>
                    <span className="shop-item-price">$20.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shop-grid-item">
                  <div className="shop-item-thumb">
                    <a href="#">
                      <img src="https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388" alt />
                    </a>
                    <div className="shop-item-hidden">
                      <a className="btn btn-new-white" href="#">Ver más información</a>
                    </div>
                  </div>
                  <div className="shop-item-captions">
                    <h6 className="shop-item-title">Nombre del curso número 2</h6>
                    <span className="shop-item-price">$30.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shop-grid-item">
                  <div className="shop-item-thumb">
                    <a href="#">
                      <img src="https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388" alt />
                    </a>
                    <div className="shop-item-hidden">
                      <a className="btn btn-new-white" href="#">Ver más información</a>
                    </div>
                  </div>
                  <div className="shop-item-captions">
                    <h6 className="shop-item-title">Nombre del curso número 3</h6>
                    <span className="shop-item-price">$50.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shop-grid-item">
                  <div className="shop-item-thumb">
                    <a href="#">
                      <img src="https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388" alt />
                    </a>
                    <div className="shop-item-hidden">
                      <a className="btn btn-new-white" href="#">Ver más información</a>
                    </div>
                  </div>
                  <div className="shop-item-captions">
                    <h6 className="shop-item-title">Nombre del curso número 4</h6>
                    <span className="shop-item-price">$80.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shop-grid-item">
                  <div className="shop-item-thumb">
                    <a href="#">
                      <img src="https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388" alt />
                    </a>
                    <div className="shop-item-hidden">
                      <a className="btn btn-new-white" href="#">Ver más información</a>
                    </div>
                  </div>
                  <div className="shop-item-captions">
                    <h6 className="shop-item-title">Nombre del curso número 5</h6>
                    <span className="shop-item-price">$100.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shop-grid-item">
                  <div className="shop-item-thumb">
                    <a href="#">
                      <img src="https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388" alt />
                    </a>
                    <div className="shop-item-hidden">
                      <a className="btn btn-new-white" href="#">Ver más información</a>
                    </div>
                  </div>
                  <div className="shop-item-captions">
                    <h6 className="shop-item-title">Nombre del curso número 6</h6>
                    <span className="shop-item-price">$20.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="space" data-my="40px" />
              </div>
            </div>
          </div>
        </section>
    );
  }
}
export default CoursesGrid;