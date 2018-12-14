import React, { Component } from 'react';
import UserSelfAssesment from './UserSelfAssesment';

class AssessmentScl extends Component {

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
            assess.question_7__c,
            assess.question_8__c,
            assess.question_9__c,
            assess.question_10__c,
            assess.question_11__c,
            assess.question_12__c,
            assess.question_13__c,
            assess.question_14__c,
            assess.question_15__c,
            assess.question_16__c,
            assess.question_17__c,
            assess.question_18__c,
            assess.question_19__c,
            assess.question_20__c,
            assess.question_21__c,
            assess.question_22__c,
            assess.question_23__c,
            assess.question_24__c,
            assess.question_25__c,
            assess.question_26__c,
            assess.question_27__c,
            assess.question_28__c,
            assess.question_29__c,
            assess.question_30__c,
            assess.question_31__c,
            assess.question_32__c,
            assess.question_33__c,
            assess.question_34__c,
            assess.question_35__c,
            assess.question_36__c,
            assess.question_37__c,
            assess.question_38__c,
            assess.question_39__c,
            assess.question_40__c,
            assess.question_41__c,
            assess.question_42__c,
            assess.question_43__c,
            assess.question_44__c,
            assess.question_45__c
        ]

        this.setState({
            quesArr: arr,
            assId: assess.sfid,
            assName: assess.name
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

export default AssessmentScl;
