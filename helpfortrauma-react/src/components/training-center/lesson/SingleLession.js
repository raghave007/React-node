import React, { Component } from 'react';
import CoursesService from '../../../services/CoursesService';
import './Lessons.css';
import { RadioGroup, Radio } from 'react-radio-group'
import { Button } from 'react-bootstrap';
const course = new CoursesService();

class SingleLession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: this.props.lessonSingle,
            questions: [],
            solution: new Map(),
            lessonId: this.props.lessonSingle.sfid,
            showResult: false
        };


        this._getQuesForLesson(this.state.lessonId);

    }

    handleChange = (question, value) => {
        this.state.solution.set(question.question_id__c, { 
            selected: value,
            answer: question.answer__c,
            result: value == question.answer__c ? true : false
        });
        console.log('xxxxxxx xxxxxxxx xxxxxxxxxxx result is ', this.state.solution);
    }


    componentWillReceiveProps(nextProps) {
        console.log('xxxxxx xx xxxxxxxxxxxxxxxxxx RECIEVED', nextProps.lessonSingle.sfid);
        this.setState({
            lesson: nextProps.lessonSingle,
            lessonId: nextProps.lessonSingle.sfid,
            lessonIndex: nextProps.lessonIndex,
            showResult: false,
        });
        this._getQuesForLesson(nextProps.lessonSingle.sfid);

    }





    componentWillMount() {
        this.setState({
            lesson: this.props.lessonSingle,
            lessonIndex: this.props.lessonIndex
        });

        //this._getQuesForLesson();
    }

    getResult = () => {
        this.setState({
            showResult: true
        })
    }

    goToNext = () => {
        console.log('xxxxx xxxxxxx xxxxxx index is ', this.state.lessonIndex);
        this.props.currentLesson(this.state.lessonIndex);
    }

    _getQuesForLesson = (sid) => {
        console.log('xxxx xxx', sid);

        course.getQuesForLesson(sid)
            .then(res => {
                this.setState({
                    questions: res.data.body
                });
                console.log('xxxxxxxxxxxx xxxxxx questions are  ', this.state.questions);
            }).catch(err => {
                console.log('xxxxxxxxxxxx xxxxxx errn is ', err);
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3 className="lession-title">{this.state.lesson.name}</h3>
                        </div>
                        <div className="spacer"></div>
                        <div className="col-md-12 col-sm-12 col-xs-12">

                            <div className="image-ls">
                                <div className="panel-collapse collapse in">
                                    <div className="panel-body panel-body-video">

                                        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe src={"https://player.vimeo.com/video/" + this.state.lesson.videoid__c + "?byline=0&portrait=0"} style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="spacer"></div>

                        <div className="is_complete">

                        </div>
                        <h6>{this.state.lesson.description__c}</h6>

                        {
                            !this.state.showResult ? (
                                <div className="Knowledge_Check">
                                    <h4>Knowledge Check Questions</h4>
                                    <div className="col-md-12 options">

                                        {
                                            this.state.questions.map((question, index) =>
                                                <div className="row" key={index}>
                                                    <span className="text-01">Q.{index + 1} &nbsp; {question.question__c}</span>

                                                    <div className="col-md-12">
                                                        <div className="form-check">
                                                            <RadioGroup className="radio-group" name={"ques-" + index} selectedValue={this.state.selectedValue} onChange={this.handleChange.bind(this, question)}>
                                                                <div className="col-md-6 col-sm-6 col-xs-12 radio-group">
                                                                    <Radio value="A" />
                                                                    <span>
                                                                        {" " + question.answer_a__c
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                                    <Radio value="B" />
                                                                    <span>
                                                                        {
                                                                            " " + question.answer_b__c
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                                    <Radio value="C" /> <span>{question.answer_c__c}</span>
                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                                    <Radio value="D" /> <span>{question.answer_d__c}</span>
                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                                    <Radio value="E" /> <span>{question.answer_e__c}</span>
                                                                </div>
                                                            </RadioGroup>
                                                        </div>
                                                    </div>

                                                </div>

                                            )
                                        }


                                    </div>
                                    <div className="spacer">

                                    </div>
                                    <div className="submit">
                                        {
                                            this.state.questions.length != 0 ? (
                                                <Button bsStyle="success" onClick={this.getResult}>Submit</Button>
                                            ) : (null)
                                        }

                                    </div>

                                </div>
                            ) : (
                                    <div className="result">
                                        {
                                            this.state.questions.map((question, index) =>
                                                <div className="row" key={index}>
                                                    <span className="text-01">Q.{index + 1} &nbsp; {question.question__c}</span>

                                                    <div className="col-md-12">
                                                        <div className="form-check">
                                                            <RadioGroup className="radio-group" disable={true} name={"ques-" + index} selectedValue={this.state.solution.get(question.question_id__c).selected} onChange={this.handleChange.bind(this, question)}>
                                                                <div className="col-md-6 col-sm-6 col-xs-12 radio-group">
                                                                    <Radio value="A" />

                                                                    {
                                                                        this.state.solution.get(question.question_id__c).selected == "A" ? (
                                                                            <span style={{ color: this.state.solution.get(question.question_id__c).answer == "A" ? "green" : "red" }}>
                                                                                {" " + question.answer_a__c
                                                                                }
                                                                            </span>
                                                                        ) : (
                                                                                <span style={{ color: this.state.solution.get(question.question_id__c).answer == "A" ? "green" : "black" }}>

                                                                                    {" " + question.answer_a__c
                                                                                    }
                                                                                </span>
                                                                            )
                                                                    }





                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                                    <Radio value="B" />


                                                                    {
                                                                        this.state.solution.get(question.question_id__c).selected == "B" ? (
                                                                            <span style={{ color: this.state.solution.get(question.question_id__c).answer == "B" ? "green" : "red" }}>
                                                                                {" " + question.answer_b__c
                                                                                }
                                                                            </span>
                                                                        ) : (
                                                                                <span style={{ color: this.state.solution.get(question.question_id__c).answer == "B" ? "green" : "black" }}>

                                                                                    {" " + question.answer_b__c
                                                                                    }
                                                                                </span>
                                                                            )
                                                                    }



                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                                    <Radio value="C" />

                                                                    {
                                                                        this.state.solution.get(question.question_id__c).selected == "C" ? (
                                                                            <span style={{ color: this.state.solution.get(question.question_id__c).answer == "C" ? "green" : "red" }}>
                                                                                {" " + question.answer_c__c
                                                                                }
                                                                            </span>
                                                                        ) : (
                                                                                <span style={{ color: this.state.solution.get(question.question_id__c).answer == "C" ? "green" : "black" }}>

                                                                                    {" " + question.answer_c__c
                                                                                    }
                                                                                </span>
                                                                            )
                                                                    }


                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                                    <Radio value="D" />

                                                                    {
                                                                        this.state.solution.get(question.question_id__c).selected == "D" ? (
                                                                            <span style={{ color: this.state.solution.get(question.question_id__c).answer == "D" ? "green" : "red" }}>
                                                                                {" " + question.answer_d__c
                                                                                }
                                                                            </span>
                                                                        ) : (
                                                                                <span style={{ color: this.state.solution.get(question.question_id__c).answer == "D" ? "green" : "black" }}>

                                                                                    {" " + question.answer_d__c
                                                                                    }
                                                                                </span>
                                                                            )
                                                                    }


                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                                    <Radio value="E" />

                                                                    {
                                                                        this.state.solution.get(question.question_id__c).selected == "E" ? (
                                                                            <span style={{ color: this.state.solution.get(question.question_id__c).answer == "E" ? "green" : "red" }}>
                                                                                {" " + question.answer_e__c
                                                                                }
                                                                            </span>
                                                                        ) : (
                                                                                <span style={{ color: this.state.solution.get(question.question_id__c).answer == "E" ? "green" : "black" }}>

                                                                                    {" " + question.answer_e__c
                                                                                    }
                                                                                </span>
                                                                            )
                                                                    }


                                                                </div>
                                                            </RadioGroup>
                                                        </div>

                                                    </div>

                                                </div>

                                            )
                                        }

                                    </div>
                                )
                        }





                    </div>

                </div>

                <div className="spacer"> </div>
                <div className="pull-right">
                    <Button onClick={this.goToNext} bsStyle="success">Next Lesson</Button>
                </div>


            </div>
        );
    }
};
export default SingleLession;