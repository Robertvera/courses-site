import React, { Component } from "react";
import ReactDOM from "react-dom";
import CoursesGridHero from './CoursesGridHero/CoursesGridHero'
import CoursesGrid from './CoursesGrid/CoursesGrid'
import CoursesGridPagination from './CoursesGridPagination/CoursesGridPagination'

class CourseGridView extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className='container'>
          <CoursesGridHero />
          <CoursesGrid />
          <CoursesGridPagination />
      </div>
    );
  }
}
export default CourseGridView;