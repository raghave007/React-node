import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AuthService from '../../../../services/AuthService';
import './Request.css';
const Auth = new AuthService();

class Request extends Component {


  render() {
    return (
      <div>
        <div className="row form-group head_div">
          <div className="pull-left"><span className="head_title">Assessments</span></div>
        </div>
        <div className="row">
          <div className="col-md-12 text-left assessments-style-Myself-main">
          	<h3>Request Assessment from Someone Else</h3>
            <div className="col-md-12 text-left assessments-Request">
              <div className="col-md-8 assessments-Request-style">
              	<label className="container_checkbox"><strong>Trauma Recovery Scale</strong><br></br> 
					Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio ac convallis.
				  	<input type="radio" name="myself-input" value="1"></input>
				  	<span className="checkmark"></span>
				</label>
				<label className="container_checkbox"><strong>Symptom Check List (SCL-45)</strong><br></br> 
					Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio no convallis
					<input type="radio" name="myself-input" value="2"></input>
				  	<span className="checkmark"></span>
				</label>
				<label className="container_checkbox"><strong>Dissociative Experiences Scale-II (DES-II)</strong><br></br> 
					Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio ac convallis. In varius, leo
					<input type="radio" name="myself-input" value="3"></input>
				  	<span className="checkmark"></span>
				</label>
				<label className="container_checkbox"><strong>Dissociative Regression Scale</strong><br></br> 
					Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio ac convallis.
					<input type="radio" name="myself-input" value="4"></input>
				  	<span className="checkmark"></span>
				</label>
				<label className="container_checkbox"><strong>Adverse Childhood Experience (ACE) Questionnaire</strong><br></br> 
				Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio ac convallis.
				<input type="radio" name="myself-input" value="5"></input>
				  	<span className="checkmark"></span>
				</label>
              </div>
              <div className="col-md-4 assessments-Request-style-right">
              	<strong>Assessment Terms and Conditions</strong><br></br> 
              	trauma processing.... Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labors at dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip on ea commodo eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="col-md-12 text-left assessments-Request">
              <div className="col-md-7 assessments-Request-style-bottom">
              	<div className="search-container">
				    <form action="">
				      <input type="text" placeholder="Enter email address" name="email"></input>
				      <button type="submit">Request Assessment</button>
				    </form>
			  	</div>
              </div>
              <div className="col-md-5 assessments-Request-style-right-bottom">
              	<label className="container_checkbox">I agree to the terms and conditions
              		<input type="radio" name="myself-input" value="1"></input>
				  	<span className="checkmark"></span>
				</label>
              </div>
            </div>
          </div>
        </div>

       

      </div>
    );
  }
};
export default Request;