import React, { Component } from "react";
import ReactDOM from "react-dom";
import CoursesGridHero from './CoursesGridHero/CoursesGridHero'
import CoursesGrid from './CoursesGrid/CoursesGrid'

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
      </div>
    );
  }
}
export default CourseGridView;