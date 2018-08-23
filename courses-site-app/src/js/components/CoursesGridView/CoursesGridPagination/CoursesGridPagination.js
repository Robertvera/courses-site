import React, { Component } from "react";
import ReactDOM from "react-dom";
import './CoursesGridPagination.scss'

class CoursesGridPagination extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#">
                  <span className="fas fa-angle-left" />
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">4</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <span className="fas fa-angle-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }
}
export default CoursesGridPagination;