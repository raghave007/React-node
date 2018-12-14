import React, { Component } from 'react';
import AuthService from '../../../services/AuthService';
import './PartsMap.css';
const Auth = new AuthService();

class PartsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };



  }



  componentDidMount() {
    if (this.props.location.state) {
      console.log('xxxxxx xxxxx ev ' + this.props.location.state.eventId);

    }
  }








  render() {
    return (
      <div>
        <div className="row form-group head_div">
          <div className="pull-left"><span className="head_title">Parts Map</span></div>

        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a >About the Parts Map</a>
                  </h4>
                </div>
                <div className="panel-collapse collapse in">
                  <div className="panel-body panel-body-video">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe src="https://player.vimeo.com/video/224858824?byline=0&portrait=0" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a >Frequest Parts Map</a>
                  </h4>
                </div>
                <div className="panel-collapse collapse in">
                  <p className="panel-body text_cont">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
              </div>
            </div>


          </div>
          <div className="col-md-8 text-left">

            <h3>Parts Map</h3>
          </div>

        </div>

      </div>
    );
  }
};
export default PartsMap;