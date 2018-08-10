import React, { Component } from "react";
import ReactDOM from "react-dom";
import CourseViewHeader from './CourseViewHeader/CourseViewHeader'
import CourseViewMain from './CourseViewMain/CourseViewMain'
import CourseViewTabs from './CourseViewTabs/CourseViewTabs'

class CourseView extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className='container'>
          <CourseViewHeader />
          <CourseViewMain />
          <CourseViewTabs />
      </div>
    );
  }
}
export default CourseView;