import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import GraphicNarrative from './graphic-narrative/GraphicNarrative';
import Home from './dashboard/Home';
import PartsMap from './parts-map/PartsMap';
import RegisterUser from '../hft/RegisterUser';
import TimeLine from '../hft/timeline/Timeline';
import Assessments from '../hft/assessments/Assessments';
import TraumaTrainingInfo from '../training-center/LdashBoard/TraumaTrainingInfo';
import AssesmentLayout from './assessments/assesmentLayout';

const Auth = new AuthService();

class Intro extends Component {

  constructor(props) {
    super(props);
    this.sendToParent = this.sendToParent.bind(this);
    this.state = {
      dataForGN: '',
      linkForCnavas: ''
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

  componentDidMount() {

  }

  render() {




    return (
      <div>


        {
          !Auth.loggedIn() ? (
            <TraumaTrainingInfo />
          ) : (
              <div>
                <div className="mainbar">

                  <div className="container">

                    <button type="button" className="btn mainbar-toggle" data-toggle="collapse" data-target=".mainbar-collapse">
                      <i className="fa fa-bars"></i>
                    </button>

                    <div className="mainbar-collapse collapse">

                      <ul className="nav navbar-nav mainbar-nav">

                        <li><Link to={'/hft/Home'}>  <i className="fal fa-dashboard"></i>Dashboard</Link></li>
                        <li><Link to={'/hft/Timeline'}>  <i className="fal fa-calendar-exclamation"></i>Timeline</Link></li>
                        <li><Link to={'/hft/Graphic-Narrative'}>  <i className="fal fa-pencil-paintbrush"></i>Graphic Narrative</Link></li>
                        <li><Link to={'/hft/Parts-Map'}>  <i className="fal fa-user-circle"></i>Parts Map</Link></li>
                        <li><Link to={'/hft/Externalized-Dialogue'}>  <i className="fal fa-comments"></i>Externalized Dialogue</Link></li>
                        <li><Link to={'/hft/Assessments'}>  <i className="fal fa-clipboard-list"></i>Assessments</Link></li>
                        <li><Link to={'/hft/Resources'}>  <i className="fal fa-book"></i>Resources</Link></li>
                        <li><Link to={'/hft/AppHelp'}>  <i className="fal fa-question-circle"></i>Help</Link></li>

                      </ul>

                    </div>

                  </div>

                </div>


                <div className="container">

                  <div className="content">

                    <div className="content-container">


                      <Switch>
                        <Route path='/hft/RegisterUser' component={RegisterUser} />
                        <Route exact path='/hft' component={Home} />
                        <Route path='/hft/Home' component={Home} />
                        <Route path='/hft/Graphic-Narrative' component={GraphicNarrative} />
                        <Route path='/hft/Timeline' component={TimeLine} />
                        <Route path='/hft/Parts-Map' component={PartsMap} />
                        <Route path='/hft/Assessments' component={AssesmentLayout} />
                        {/* <Route exact path='/Graphic-Narrative' render={() => <GraphicNarrative openCanvas={this.launchCanvas} />} /> */}

                      </Switch>


                    </div>

                  </div>

                </div>
              </div>
            )
        }




      </div>
    );
  }
}

export default Intro;