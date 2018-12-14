import React, { Component } from 'react';
import UserSelfAssesment from './UserSelfAssesment';

class AssessmentDrs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quesIndex: 0,
            loading: true,
            percent: 0
        }
    }

    componentDidMount() {
        console.log('xxxxxxxx xxxxxxxx xxxxxxxxxx AssessmentTrs1', this.props.assQues);
        this._setArray(this.props.assQues[0]);

    }

    _setArray = (assess) => {
        let arr = [
            assess.question_1__c,
            assess.question_2__c,
            assess.question_3__c,
            assess.question_4__c,
            assess.question_5__c,
            assess.question_6__c,
        ]

        this.setState({
            quesArr: arr,
            assId: assess.sfid,
            assName: assess.name,
        }, function () {
            if (this.state.quesArr.length > 0) {
                this.setState({ loaded: true })
            }
        })
    }

    render() {
        return (
            <div>
                {
                    <div>
                        {
                            this.state.loaded ? (
                                <UserSelfAssesment assName={this.state.assName} quesArr={this.state.quesArr} assId={this.state.assId} />
                            ) : (null)
                        }

                    </div>

                }

            </div>
        );
    }
}

export default AssessmentDrs;
