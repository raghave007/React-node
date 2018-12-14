import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import { Link, Route, Switch } from 'react-router-dom';
import 'react-rangeslider/lib/index.css'

class UserSelfAssesment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quesIndex: 0,
            maxIndex: 0,
            percent: 0,
            ready: false,
            ansMap: new Map(),
            enableFinish: false
        }
        // this.next = this.next.bind(this);
        // this.prev = this.prev.bind(this);
    }

    next(index) {
        let k = index + 2;
        let per = this.state.ansMap.get('question_' + k + '__c') ? this.state.ansMap.get('question_' + k + '__c').ans : 0;
        this.setState({
            quesIndex: index + 1,
            percent: per
        })
    }

    prev(index) {
        this.setState({
            quesIndex: index - 1,
            percent: this.state.ansMap.get('question_' + index + '__c') != undefined ? this.state.ansMap.get('question_' + index + '__c').ans : 0
        });
    }

    _setAnsMap = (key, value) => {
        this.state.ansMap.set(key, {
            ques: this.state.quesArr[this.state.quesIndex],
            ans: value
        });
        if (this.state.ansMap.size == this.state.quesArr.length) {
            this.setState({
                enableFinish: true
            })
        }
        console.log('xxxxxx xxxxxxxxxx xxxxxxxxx xxxxxxxxx map is ', this.state.ansMap);
    }

    componentDidMount() {
        console.log('xxxxxxxx xxxxxxxx xxxxxxxxxx AssessmentTrs1', this.props.quesArr);
        console.log('xxxxxxxx xxxxxxxx xxxxxxxxxx this.props.assId', this.props.assName);

        this.setState({
            quesArr: this.props.quesArr,
            assId: this.props.assId,
            assName: this.props.assName
        }, function () {
            this.setState({
                ready: true
            })
        });

    }

    handleOnChange = val => {
        console.log(val);
        this.setState({
            percent: val
        }, function () {
            let k = this.state.quesIndex + 1;
            this._setAnsMap('question_' + k + '__c', val);
        });


    }

    finishTest = () => {
        setTimeout(
            function () {
                this.props.history.replace('/hft/Home');
            }
                .bind(this),
            2000
        );
        // this.props.history.push({
        //     pathname: '/hft/Assessments/finish',
        //     search: '?query=abc',
        //     state: { detail: 'response.data' }
        //   })
        // this.props.history.replace('/hft/Home');
    }

    render() {
        return (
            <div>
                {
                    this.state.ready ? (
                        <div>
                            <h4>
                                {this.state.quesIndex + 1 + '. '}   {this.state.quesArr[this.state.quesIndex]}

                            </h4>
                            <div className="clearfix"></div>
                            <div className="slider">
                                <Slider
                                    min={0}
                                    max={100}
                                    step={10}
                                    value={this.state.percent}
                                    onChange={this.handleOnChange}
                                />

                            </div>
                            <div className="spacer">
                            </div>

                            <div className="text-center">
                                <h5>{this.state.percent + '% of time'}</h5>
                            </div>

                            <div className="text-center">
                                <button disabled={this.state.quesIndex == 0 ? true : false} onClick={this.prev.bind(this, this.state.quesIndex)} className="button btn-success btn btn-sm">Prev</button>&nbsp;&nbsp;
                                         <button disabled={this.state.quesIndex >= this.state.quesArr.length - 1 ? true : false} onClick={this.next.bind(this, this.state.quesIndex)} className="button btn-success btn btn-sm">Next</button>

                                {
                                    this.state.enableFinish ? (
                                        <Link className="button btn-success btn btn-sm mar-left" to={
                                            {
                                                pathname: '/hft/Assessments/finish',
                                                state: {
                                                    assId: this.state.assId,
                                                    result: this.state.ansMap,
                                                    assName: this.props.assName

                                                }
                                            }
                                        } >Finish Assesment</Link>
                                    ) : (
                                            null
                                        )
                                }

                            </div>
                        </div>
                    ) : (null)
                }

            </div>
        );
    }
}

export default UserSelfAssesment;
