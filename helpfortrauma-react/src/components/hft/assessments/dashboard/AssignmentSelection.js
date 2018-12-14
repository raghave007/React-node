import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AuthService from '../../../../services/AuthService';
import { Button, Modal } from 'react-bootstrap';

const Auth = new AuthService();

class AssignmentSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  _setActionProps = (propKey) => {
    this.props.action({
      key: propKey
    })
  }

  _goToRequestAssessment = () => {
    this._setActionProps('REQUEST_ASSESMENT');
  }

  render() {
    return (
      <div>
        <div className="row form-group head_div">
          <div className="pull-left"><span className="head_title">Assessments</span></div>
        </div>
        <div className="row">
          <div className="col-md-12 text-left assessments-style">
            <p>
              Welcome to the assessments page. Assessments can measure the progress of trauma processing.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, Bunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="col-md-12 text-left assessments-button btn-padd">
              <div className="text-center">
                <Link to={'/hft/Assessments/self-type'} className="btn btn-default pad-top"> New Assessment for Myself </Link>
                <Link  to={''} className="btn btn-default pad-top">Request Assessment from Someone Else</Link>
                <Link  to={''} className="btn btn-default pad-top">Assessment Reports</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default AssignmentSelection;