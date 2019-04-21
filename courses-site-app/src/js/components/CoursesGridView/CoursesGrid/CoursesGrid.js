import React, { Component } from "react";
//import CourseDetails from './../../CourseView/index'
import './CoursesGrid.scss'
import Api from '../../../../api/vmApi'
import { withRouter } from "react-router-dom"
import ShowMoreCourses from '../../Buttons/ShowMoreButton'
import { formatText } from '../../utils/utils'


class CoursesGrid extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      skipResults: 0
    };
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses = () => {
    const { skipResults } = this.state 
    Api.listCourses(skipResults).then(courses => {
			this.setState({ courses: [ ...this.state.courses, ...courses.data.data ] })
    })
  }

  showMoreCourses = e => {
    e.preventDefault()
    const showMore = this.state.skipResults + 12
    this.state.skipResults = showMore
    this.getCourses()
  }

  showCourse = (e, course) => {
    e.preventDefault()
    this.props.history.push(`/detalles/${course}`)
  }

	render() {
		const { courses } = this.state
		return (
			<section className="module">
				<div className="container">
					<div className="row">
						{
							courses.length ?
								courses.map(course => {
									return <div className="col-md-4" key={course._id}>
										<div className="shop-grid-item">
											<div className="shop-item-thumb imageContainer">
												<a
													onClick={e => { this.showCourse(e, course.name) }}
												>
													<img className="imageCourse" src={course.image || "https://vmbformacion.files.wordpress.com/2017/02/cartel-bcn1.png?w=505&h=388"} />
												</a>
												<div className="shop-item-hidden">
													<a
														className="btn btn-new-white"
														onClick={e => { this.showCourse(e, course.name, course._id) }}
													>
														Ver más información
                          </a>
												</div>
											</div>
											<div className="shop-item-captions">
												<h6 className="shop-item-title">{formatText(course.name)}</h6>
												<span className="shop-item-price">{course.price}€</span>
											</div>
										</div>
									</div>
								})
								: null
						}

					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="space" data-my="40px" />
						</div>
					</div>
				</div>
				{
					courses && courses.length >= 12 ?
						<ShowMoreCourses
							onClick={(e) => this.showMoreCourses(e)}
							type="button"
							className="show-more"
						/> :
						null
				}
			</section>
		);
	}
}
export default withRouter(CoursesGrid);