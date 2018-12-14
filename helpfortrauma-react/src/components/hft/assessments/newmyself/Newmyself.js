import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AuthService from '../../../../services/AuthService';
import './Newmyself.css';
import Recovery from '../newmyself/recovery/Recovery';
import Adverse from '../newmyself/adverse/Adverse';
import SelfAssessments from  './SelfAssessments'
const Auth = new AuthService();
// class Newmyself extends React.Component {
// render() {
//     return (
//       <div>
   
//         <Switch>
//           <Route exact path='/hft/Assessments/Newmyself' component={home_Newmyself} />
//           <Route exact path='/hft/Assessments/Newmyself/Recovery' component={Recovery} />
//           <Route exact path='/hft/Assessments/Newmyself/Adverse' component={Adverse} />
//         </Switch>

//       </div>

//     );  
// 	}
// };



class Newmyself extends React.Component {

 constructor() {
	super();

	this.state = {
		size: '',
		AssessmentStatus:true,
		checkAssessment:''
	};
	this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.MyselfSubmit = this.MyselfSubmit.bind(this);
}
MyselfSubmit() {
  this.setState({
		AssessmentStatus:false
	});
 console.log('xxxxxxx ragav');

}
handleChange(event) {
  this.setState({
		size: event.target.value,
		checkAssessment:event.target.value
	});
	
	console.log('xxxxxxx xxxxx vv', event.target.value);

}
handleSubmit(event) {
  event.preventDefault();

  //alert(`You chose the ${this.state.size}`);
  //window.location.reload(`/${this.state.size}`);
  //history.pushState(null, '/');
	//window.location.href = '/hft/Assessments/Newmyself/' + this.state.size;

}
  render() {
    return (
      <div>
        <div className="row form-group head_div">
          <div className="pull-left"><span className="head_title">Assessments</span></div>
        </div>
				<div className="tt">
				{
          this.state.AssessmentStatus ? (
        <div className="row">
          <div className="col-md-12 text-left assessments-style-Myself-main">
          	<h3>New Assessment for Myself</h3>
          	<form onSubmit={this.handleSubmit}>
	            <div className="col-md-12 text-left assessments-Myself">
	              <div className="assessments-Myself-style">
	              	<label className="container_checkbox"><strong>Trauma Recovery Scale</strong><br></br> 
						Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio ac convallis.
					  	<input type="radio" name="myself-input" value="TRS" checked={this.state.size === "TRS"} onChange={this.handleChange}></input>
					  	<span className="checkmark"></span>
					</label>
					<label className="container_checkbox"><strong>Symptom Check List (SCL-45)</strong><br></br> 
						Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio no convallis
						<input type="radio" name="myself-input" value="SCL-45" checked={this.state.size === "SCL-45"} onChange={this.handleChange}></input>
					  	<span className="checkmark"></span>
					</label>
					<label className="container_checkbox"><strong>Dissociative Experiences Scale-II (DES-II)</strong><br></br> 
						Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio ac convallis. In varius, leo
						<input type="radio" name="myself-input" value="DES-II" checked={this.state.size === "DES-II"} onChange={this.handleChange}></input>
					  	<span className="checkmark"></span>
					</label>
					<label className="container_checkbox"><strong>Dissociative Regression Scale</strong><br></br> 
						Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio ac convallis.
						<input type="radio" name="myself-input" value="DRS" checked={this.state.size === "DRS"} onChange={this.handleChange}></input>
					  	<span className="checkmark"></span>
					</label>
					<label className="container_checkbox"><strong>Adverse Childhood Experience (ACE) Questionnaire</strong><br></br> 
					Lorem ipsum dolor sit amet, consectetur adipiscing alit. Aenean laoreet sollicitudin odio ac convallis.
					<input type="radio" name="myself-input" value="ACE" checked={this.state.size === "ACE"} onChange={this.handleChange}></input>
					  	<span className="checkmark"></span>
					</label>
	              </div>
	            </div>
	            <div className="col-md-12 text-left assessments-button-Myself">
	              <div className="assessments-button-style-Myself">
	              	<button type="submit" className="btn btn-default" onClick={this.MyselfSubmit} >Begin Assessment</button> 
	              </div>
	            </div>
            </form>
          </div>
        </div>
				  ) : (
							<SelfAssessments AssessmentSingle={this.state.checkAssessment}/>
						)
					}
				</div>

       

      </div>
    );
  }
};

export default Newmyself;