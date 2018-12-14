import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AuthService from '../../../services/AuthService';
import './Assessments.css';
import Newmyself from '../assessments/newmyself/Newmyself';
import Request from '../assessments/request/Request';
import Home from './dashboard/AssignmentSelection';
import AssignmentSelection from './dashboard/AssignmentSelection';

const Auth = new AuthService();

class Assessments extends Component {

  constructor(props) {
    super(props);
    this.sendToParent = this.sendToParent.bind(this);
    this.state = {
      showAssignmentSelection: true,
      showSelfAssesment: false,
      showRequestAssesment: false,
    };
    this.launchCanvas = this.launchCanvas.bind(this);
  }

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }

  sendToParent() {
    window.location.reload();  //  this.props.childData('GO_TO_CENTER');
  }

  launchCanvas(val) {
    if (val) {
      console.log('xxxxxxx xxxxxxxx xxxxxxx laumch ', val);
    }
  }

  viewAction = (action) => {
    console.log('xxxxxxxx xxxxxx xxxxxxxxx action is ', action);
    this.setState({
      showAssignmentSelection: false,
    });

    switch (action.key) {
      case 'SELF_ASSESMENT':
        this.setState({
          showRequestAssesment: false,
          showSelfAssesment: true
        });
        break;

      case 'REQUEST_ASSESMENT':
        this.setState({
          showSelfAssesment: false,
          showRequestAssesment: true,
        });
        break;
    }
  }

  componentDidMount() {
    if (!Auth.loggedIn()) {
      this.props.history.replace('/login');
    }
    // const link =  this.props.location.pathname;
    // this.setState({linkForCnavas: link});
    // console.log('xxxx xxxxxxxxxx link is ' + link);

  }

  render() {
    return (
      <div>

        {
          this.state.showAssignmentSelection ? (
            <AssignmentSelection action={this.viewAction} />
          ) : (

              <div>
                {
                  this.state.showSelfAssesment ? (
                    <Newmyself />
                  ) : (null)
                }

                {
                  this.state.showRequestAssesment ? (
                    <Request />
                  ) : (null)
                }

              </div>
            )
        }

        {/* <Switch>
          <Route exact path='/hft/Assessments' component={Home} />
          <Route path='/hft/Assessments/Home' component={Home} />
          <Route path='/hft/Assessments/Newmyself' component={Newmyself} />
          <Route path='/hft/Assessments/Request' component={Request} />
        </Switch> */}



      </div>

    );
  }
};
export default Assessments;