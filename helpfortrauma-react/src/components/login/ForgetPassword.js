import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const Auth = new AuthService();
//const Url='http://localhost:3300';
//const Url = '';
class ForgetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fields: {},
            errors: {},
            showSuccessMsg: false,
            actionMessage: '',
            messageColor: '',

        };
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

         //Email
    if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Cannot be empty";
      }
      if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }
      this.setState({ errors: errors });
      console.log(formIsValid);
      return formIsValid;

    }


    sendMail = (e) => {
      

        e.preventDefault();
        if (this.handleValidation()) { 

            this.setState({
                showSuccessMsg: true,
                actionMessage: <i className="fas fa-spinner icon-flipped"></i>,
          
              });

            Auth.forgetPassword(this.state.fields["email"])
            .then(res => {
                this.setState({
                    showSuccessMsg: true,
                    responseMessage: res.data.success,
                    actionMessage: res.data.message,
                  });
                  if (res.data.success) {

                    this.setState({
                      messageColor: 'alert alert-success'
                    });
        
                    
        
                  } else {
        
                    this.setState({
                      messageColor: 'alert alert-danger'
                    });
        
                  }
                  setTimeout(
                    function() {
                        this.setState({
                            showSuccessMsg: false,
                            responseMessage: '',
                            actionMessage: '',
                            messageColor:''
                          });
                    }
                    .bind(this),
                    3000
                );
                console.log(this.state.fields["email"]);
            }).catch(err => {
                console.log('xx xxxxxxxxxxxx err is ', err);
            })

        }



      
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div>
                <div className="page-block page_block_below_fold" id="page_block_below_registration">
                    <div className="border-holder">
                        <div className="container">
                            <div className="block-inner">
                                <div className="border-holder-left col-md-12">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-block  page_block_custom" id="page_block_below_login_content">
                    <div className="border-holder">
                        <div className="container">
                            <div className="block-inner">
                                <div className="block-inner-main">
                                    <div className="page-element widget-container widget-headline widget-form">
                                        <div className="contents element-278 col-md-offset-3 col-md-6">
                                            <h2>Forgot Password</h2>
                                            {
                                                this.state.showSuccessMsg
                                                    ? (

                                                        <div className={'text-center ' + this.state.messageColor}>
                                                            <span>{this.state.actionMessage}</span>
                                                        </div>

                                                    )
                                                    : (
                                                        null
                                                    )
                                            }
                                            <form method="post" action="" className="email-form" data="instapage-form" data-wid="430" noValidate="novalidate">
                                                <div className="input-holder field-text">
                                                    <div className="field-element ">

                                                        <input onChange={this.handleChange.bind(this, "email")} type="text" className="shortnice form-input  required" ref="email" value={this.state.fields["email"]} name="email" placeholder="Email" tabIndex="1" />
                                                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                                    </div>
                                                </div>

                                                <button type="button" onClick={this.sendMail} className="btn submit-button button_submit dynamic-button  corners  " tabIndex="4">
                                                    Send Email &nbsp; <i className="fa fa-play-circle"></i>
                                                </button>
                                              
                                            </form>
                                            <p className="text-center">Enter your email address and we'll send you a password reset link</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgetPassword;