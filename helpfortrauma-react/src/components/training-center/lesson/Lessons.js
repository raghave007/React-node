import React, { Component } from 'react';
import CoursesService from '../../../services/CoursesService';
import './Lessons.css';
import LessonList from './LessonList';
import SingleLession from './SingleLession';
const course = new CoursesService();

class Lesson extends Component {

    /* *****************************Constructor********************** */
    constructor(props) {
        super(props);
        this.state = {
            course: {},
            lessons: [],
            lesson: {},
            showCourseDetail: true
        };
    }

    componentDidMount() {
        this.getCourse();
    }

    goNextLesson = (lesson) => {
        this.goToLesson(lesson);

        console.log('xxxxxxx xxxxxx xxxxxxxxx lesson to show', lesson);
    }

    goToLesson = (lesson, index) => {
        if (lesson) {
            this.setState({
                showCourseDetail: false,
                lesson: lesson,
                lessonIndex: index
            });

            //  console.log('xxxxxxx xxxxxx xxxxxxxxx lesson to show', this.state.lesson);

        }
    }

    getCourse = () => {
        if (this.props.location.state.course) {
            this.setState({
                course: this.props.location.state.course
            });
            this._getLessons(this.props.location.state.course.sfid);
            console.log(' xxxxxxxxxx xxxxxxxxx data is ', this.props.location.state.course); 
        } else {
            this.props.history.push({
                pathname: '/Learning-center',
            })
        }
    }

    goToNextLesson = (currentLesson) => {
        console.log('xxxxxxxx xxxxxxxxxx currentLesson ', currentLesson);
        this.setState({
            showCourseDetail: false,
            lesson: this.state.lessons[currentLesson + 1],
            lessonIndex: currentLesson + 1
        });
    }

    _getLessons = (courseId) => {
        course.getLessons(courseId)
            .then(lessons => {
                if (lessons.data.success) {
                    let lessonsOrder = lessons.data.body;
                    lessonsOrder.sort((a, b) => {
                        return a.position__c - b.position__c
                    });
                    this.setState({
                        lessons: lessonsOrder,
                        lesson: lessons.data.body[0]
                    });
                }
                // console.log('xxxxxxxx xxxxxxxxx xxxxxxxxxx lessons are ', this.state.lessons);
            }).catch(err => {
                console.log('xxxxxxxx xxxxxxxxx xxxxxxxxxx lessons are ', err);
            });
    }


    render() {
        return (
            <div>
                <div className="container">

                    <div className="col-md-8 col-sm-6 col-xs-12">
                        {
                            this.state.showCourseDetail ? (
                                <div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        {/* <div className="image-ls">
                                <img src="http://startupanz.com/wp-content/uploads/2018/03/maxresdefault-1.jpg" />
                            </div> */}
                                        <h3 className="lession-title">{this.state.course.title__c}</h3>
                                    </div>
                                    <div className="spacer"></div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">

                                        <div className="image-ls">
                                            <div className="panel-collapse collapse in">
                                                <div className="panel-body panel-body-video">
                                                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe src="https://player.vimeo.com/video/224861127?byline=0&portrait=0" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                                </div>
                                            </div>
                                            {/* <img src="https://www.wpstatus.in/wp-content/uploads/2016/10/sad.jpg" /> */}
                                        </div>
                                    </div>
                                    <div className="spacer"></div>
                                    <div className="clearfix"></div>


                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="alert alert-warning">
                                            No CE credits available at this time. Applications are being reviewed
                             </div>

                                        <div className="form-group">
                                            <button type="button" className="btn btn-success">Take this Course</button>
                                        </div>
                                        <div className="course-content">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <td>Lessons</td>
                                                        <td className="status">Status</td>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.lessons.map((lesson, index) =>
                                                            <tr key={index}>
                                                                <td>{lesson.name}</td>
                                                                <td className="status"></td>

                                                            </tr>
                                                        )
                                                    }


                                                </tbody>
                                                currentLesson                                            </table>

                                        </div>

                                    </div>
                                </div>
                            ) : (
                                    <div><SingleLession lessonIndex={this.state.lessonIndex} lessonSingle={this.state.lesson} currentLesson={this.goToNextLesson} /></div>
                                )
                        }
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 list-ls">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                {
                                    this.state.lessons.length > 0 ? (
                                        // <LessonList nextLessonIs={this.goNextLesson} currentLessonToList={this.state.currentLesson} goLesson={this.goToLesson} lessonsList={this.state.lessons} />
                                        <div>
                                            <div className="form-group">
                                                <h4>Progress Bar</h4>
                                                <div className="progress progress-striped active">
                                                    <div className="progress-bar progress-bar-secondary" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" style={{ width: '42%' }}>
                                                        <span className="sr-only">42.7% Bounce Rate</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4>Lesson Navigation</h4>
                                            <ul className="timeline">

                                                {
                                                    this.state.lessons.map((lesson, index) =>
                                                        <li key={index}>
                                                            <a href="javascript:void(0)" onClick={this.goToLesson.bind(this, lesson, index)}>{lesson.name}</a>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                            <div className="form-group">
                                                <h4>Quizzes</h4>
                                                <hr />
                                            </div>
                                            <div className="form-group">
                                                <h4>Course Materials</h4>
                                                <div className="image-ls">
                                                    <img src="https://img.alicdn.com/imgextra/i3/TB1NfNlIVXXXXc5XXXXXXXXXXXX_!!0-item_pic.jpg" />
                                                </div>

                                            </div>
                                        </div>

                                    ) : (
                                            null
                                        )
                                }


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Lesson;
