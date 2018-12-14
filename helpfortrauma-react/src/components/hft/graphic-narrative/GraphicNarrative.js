import React, { Component } from 'react';
import AuthService from '../../../services/AuthService';
import './GraphicNarrative.css';

const Auth = new AuthService();

class GraphicNarrative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };
  }

  // launchCanvas(e) {
  //   localStorage.setItem('event', JSON.stringify(this.state.event));
  // }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        event: {
          eventId: this.props.location.state.eventId,
          eventTitle: this.props.location.state.eventTitle
        }
      })
      console.log('xxxxxx xxxxx ev ', this.props.location.state.eventTitle);
    }
    if (!Auth.loggedIn()) {
      this.props.history.replace('/login');
    }
  }

  render() {
    return (
      <div>

        <div className="row form-group head_div">
          <div className="pull-left"><span className="head_title">Graphic Narrative</span></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a >About the Graphic Narrative</a>
                  </h4>
                </div>
                <div className="panel-collapse collapse in">
                  <div className="panel-body panel-body-video">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe src="https://player.vimeo.com/video/224861127?byline=0&portrait=0" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a >Frequest Graphic Narrative</a>
                  </h4>
                </div>
                <div className="panel-collapse collapse in">
                  <p className="panel-body text_cont">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
              </div>
            </div>
            {/* <div hidden={!this.props.location.state}>
              <Link to={'/drawing-canvas'} target='_blank' className="btn btn-warning" onClick={this.launchCanvas}>Launch Canvas</Link>
            </div> */}
          </div>
          <div className="col-md-8 text-left">



            <div className="row ">

              <div className="col-md-6 col-sm-6">

                <h4>
                  <i className="fa fa-folder-close"></i> &nbsp;
                  Account Settings
      &nbsp;<small>(12)</small>
                </h4>

                <ul className="icons-list support-list">
                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How Secure Is My Password?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Can I Change My Username?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Where Can I Upload My Avatar?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How Do I Change My Timezone?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How Do I Change My Password?
        </a>
                  </li>

                </ul>


              </div>


              <div className="col-md-6 col-sm-6">

                <h4>
                  <i className="fa fa-folder-close"></i>
                  &nbsp; API Questions
      &nbsp;<small>(12)</small>
                </h4>

                <ul className="icons-list support-list">
                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      What Technologies Are Used?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      What Are The API Limits?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Why Was My Developer Application Rejected?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Where can I find the documentation?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How Do I Get An API Key?
        </a>
                  </li>

                </ul>


              </div>

            </div>



            <div className="row">

              <div className="col-md-6 col-sm-6">
                <h4>
                  <i className="fa fa-folder-close"></i>
                  &nbsp; Billing
      &nbsp;<small>(12)</small>
                </h4>

                <ul className="icons-list support-list">
                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Can I Contact A Salés Rep?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Do I Need To Pay VAT?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Can I Get A Refund?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      What’s The Difference Between Annual & Monthly Billing
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      What Happens If The Price Increases?
        </a>
                  </li>

                </ul>


              </div>

              <div className="col-md-6 col-sm-6">
                <h4>
                  <i className="fa fa-folder-close"></i>
                  &nbsp; Copyright & Legal
      &nbsp;<small>(12)</small>
                </h4>

                <ul className="icons-list support-list">
                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How Do I Contact Legal?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Where Are Your Offices Located?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Who Owns The Copyright On Uploaded Text & Images?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Our Content Policy
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How Do I File A DMCA?
        </a>
                  </li>

                </ul>



              </div>

            </div>



            <div className="row">

              <div className="col-md-6 col-sm-6">
                <h4>
                  <i className="fa fa-folder-close"></i>
                  &nbsp; Mobile Apps
      &nbsp;<small>(12)</small>
                </h4>

                <ul className="icons-list support-list">
                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How Do I Download The Andoird App?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How To Download Our iPad App
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Incompatibilities With Horizon Phones
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Can I Use My Android Phone?
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Is There An iOS App?
        </a>
                  </li>

                </ul>


              </div>

              <div className="col-md-6 col-sm-6">
                <h4>
                  <i className="fa fa-folder-close"></i>
                  &nbsp; Upgrading
      &nbsp;<small>(2)</small>
                </h4>

                <ul className="icons-list support-list">
                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      Recommended Plugins
        </a>
                  </li>

                  <li>
                    <i className="icon-li fal fa-file-alt"></i>
                    <a href="javascript:;">
                      How To Update Seamlessly Every Time
        </a>
                  </li>


                </ul>


              </div>

            </div>


          </div>

        </div>

      </div>
    );
  }
};
export default GraphicNarrative;