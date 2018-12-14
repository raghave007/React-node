import React, { Component } from 'react';
import CoursesService from '../../../services/CoursesService';
import './Courses.css';

const course = new CoursesService();




class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            buyCourses: [],
            persant: '%',
            viewClass: 'col-md-4 m-b-30'
        };

        this.showLarge = this.showLarge.bind(this);
        this.showJustify = this.showJustify.bind(this);

    }

    goToLesson = (course) => {
        this.props.history.push({
            pathname: '/Learning-center/Lesson',
            state: { course: course }
        })
    }

    goToCourse = (course) => {
        let isUsrSubscribed = false;
        console.log('xxxxxxxx xxxxxxxxxxxx isUsrSubscribed ', isUsrSubscribed);
        let usrSubscribed = this.state.buyCourses.filter(cor => (cor.course__c == course.sfid));
        if (usrSubscribed.length > 0) {
            isUsrSubscribed = true;
        }
        console.log('xxxxxxxx xxxxxxxxxxxx isUsrSubscribed ', isUsrSubscribed);
        this.props.history.push({
            pathname: '/Learning-center/LessonOverview',
            state: { course: course, isUsrSubscribed: isUsrSubscribed }
        })
    }

    showLarge() {
        this.setState({ viewClass: 'col-md-4 m-b-30' });
    }

    showJustify() {
        this.setState({ viewClass: 'col-md-12 m-b-30' });
    }


    componentDidMount() {
        console.log('xxx x x raghav xxx', course.getProfile());
        this.getUserCourses(course.getProfile().sfid);
    }

    getUserCourses(userId) {
        course.getUserCourses(userId)
            .then(res => {
                if (res.data.success) {
                    this.setState({ buyCourses: res.data.body });
                    this.getAllCourses();
                    console.log('xxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxx error from courese ', this.state.buyCourses);

                }
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxx error from courese ', err);
            });
    }

    // isUsrHasAccess = (courseId) => {
    //     console.log('xxxxxxxxxxx xxxxxxxxxxxx checking');
    //     this.state.buyCourses.forEach(value => {
    //         if (value.course__c == courseId) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    // }

    getAllCourses() {
        course.getCourses()
            .then(res => {
                this.setState({ courses: res.data.body.reverse() });
                console.log('xxx x x courese', res.data.body);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxx error from courese ', err);
            });
    }

    render() {
        return (
            <div>

                <div className="border-holder-left col-md-12 form-border-holder-left-courses">
                    <div className="page-element widget-container widget-headline widget-form">
                        <div className="contents element-278">
                            <div className="col-md-12 m-b-30 top-course-content" >
                                <span className="pointer" onClick={this.showLarge}><i className="fa fa-th-large" aria-hidden="true"></i></span>
                                <span className="pointer" onClick={this.showJustify}><i className="fa fa-align-justify" aria-hidden="true"></i></span>
                            </div>
                            {this.state.courses.map((cource, index) =>
                                <div className={this.state.viewClass} key={index} >
                                    <div className="card" >
                                        <img className="card-img-top" src='/img/image/thumb.svg' alt="Card image cap" />

                                        <div className="card-body minHeight">
                                            <h5 className="card-title height-40">{cource.title__c}</h5>
                                            <p className="card-text">{cource.description__c}</p>
                                            <p>{cource.cost__c}%</p>
                                            <div className="progress progress-striped active">
                                                <div className="progress-bar progress-bar-secondary" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" style={{ width: cource.cost__c + this.state.persant }}>
                                                    <span className="sr-only">42.7% Bounce Rate</span>
                                                </div>
                                            </div>
                                            <button onClick={this.goToCourse.bind(this, cource)} className="btn btn-primary btn-primary-custom btn-sm">Course Overview</button>
                                            {
                                                this.state.buyCourses.some(course => course['course__c'] === cource.sfid) ? (
                                                    <div className="pull-right">

                                                            <button onClick={this.goToLesson.bind(this, cource)} className="btn btn-primary btn-sm pull-right">Go To   Lessons</button>
                                                        </div>
                                                ) : (

                                                    <div className="pull-right">
                                                        <span className="label label-warning font-14"> ${cource.cost__c}</span>
                                                    </div>
                                                        

                                                    )
                                            }

                                            {
                                                // this.state.buyCourses.map((usrCourse, index) =>
                                                //     <div className="pull-right" key={index}>
                                                //         {
                                                //             usrCourse.course__c !== cource.sfid ? (
                                                //                 <div>
                                                //                     <span className="label label-warning font-14"> ${cource.cost__c}</span>
                                                //                 </div>
                                                //             ) : (
                                                //                     <div>

                                                //                         {/* <button onClick={this.goToLesson.bind(this, cource)} className="btn btn-primary btn-sm pull-right">Go To   Lessons</button> */}
                                                //                     </div>
                                                //                 )
                                                //         }
                                                //     </div>
                                                // )
                                            }
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>


                            )}

                        </div>
                    </div>

                </div>





            </div>
        );
    }
};
export default Courses;