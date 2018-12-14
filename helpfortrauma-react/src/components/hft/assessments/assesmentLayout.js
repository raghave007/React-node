import React, { Component } from 'react';
import Assessments from './Assessments';
import { Link, Route, Switch } from 'react-router-dom';
import AssignmentSelection from './dashboard/AssignmentSelection';
import SelfType from './selfType';
import FinishAssesment from './finishAssesment';

class AssesmentLayout extends Component {
    render() {
        return (
            <div>
                    <Switch>
                        <Route exact path='/hft/Assessments' component={AssignmentSelection} />
                        <Route path='/hft/Assessments/finish' component={FinishAssesment} />
                        <Route path='/hft/Assessments/self-type' component={SelfType} />

                        <Route path='/hft/Assessments/request' component={AssignmentSelection} />
                    </Switch>
            </div>
        );
    }
}

export default AssesmentLayout;
