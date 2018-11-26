import React, { Component } from "react";
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer'
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
    <div>
      <TopBar/>
    
      <div className='container'>
          <CoursesGridHero />
          <CoursesGrid />
      </div>
      <Footer/>
    </div>
    );
  }
}
export default CourseGridView;