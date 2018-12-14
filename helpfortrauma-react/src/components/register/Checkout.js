import React, { Component } from 'react';
import { plans } from '../../const/plans';
import { Button, Modal } from 'react-bootstrap';
import CoursesService from '../../services/CoursesService';

const course = new CoursesService();

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: [],
            cart: [],
            totalOneTime: 0,
            showModal: false,
            showModalDialog: false,


        };
        this.closeDialog = this.closeDialog.bind(this);
      
    }

  

    componentDidMount() {
        this._getCoursePlans();
    }

    _getCoursePlans = () => {
        course.getCourses()
            .then(res => {
                console.log('XXXXXXXXXXXXXXXX courses are ', res.data.body);
                this.setState({ plans: res.data.body });
            }).catch(err => {
                console.log('XXXXXXXXXXXXXXXX courses are ', err);
            });
    }

    confirmOrder = () => {
        this.props.history.replace('/register/confirm');
    }

    check = (event) => {
        return this.state.cart.includes(event);
    }

    addToCart = (plan) => {

      
        let planArr = this.state.cart;
        planArr.push(plan);
        this.setState({
            cart: planArr,
            totalOneTime: this.state.totalOneTime + plan.cost__c,
            showModalDialog: true
        });

       // console.log('xxxxxxxxx xxxxxxxxx xxxxxxx cart is ', this.state.cart);

    }

   

    closeDialog() {
        this.setState({ showModalDialog: false });
    }

   


    render() {


        // console.log('xxxxxxxxxxx--',recommended);
        return (
            <div className="about-us">
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

                <div className="page-block  page_block_custom" id="page_block_below_checkout_content">
                    <div className="border-holder">
                        <div className="container">
                            <div className="block-inner">
                                <div className="block-inner-main">
                                    <div className="border-holder-left col-md-9 form-border-holder-left-login">
                                        <div className="page-element widget-container widget-headline widget-form">
                                            <div className="contents element-280">
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn btn-secondary">Recommended for Standard Users</button>
                                                    <button type="button" className="btn btn-secondary">Recommended for Professionals</button>
                                                </div>
                                            </div>
                                            <div className="table">
                                                {this.state.plans.map((event, index) =>
                                                    <div className="row_table" key={index}> <div className="cell_table col-md-8"><h5>{event.title__c}</h5> <p>{event.description_short__c}</p></div><div className="cell_table col-md-2">{event.cost__c}</div><div className="cell_table col-md-2"> <button disabled={this.check(event)} className="button btn btn-warning btm-sm"onClick={this.addToCart.bind(this, event)}>Add to Cart </button></div></div>
                                                )}
                                            </div>


                                        </div>

                                    </div>
                                    <div className="border-holder-right col-md-3 form-border-holder-right-login">
                                        <div className="contents element-282">
                                            <h5>One Time Charges
                                                <span className="float-right">${this.state.totalOneTime}</span>
                                            </h5>
                                            {
                                                this.state.cart.map((item, index) =>

                                                    <p key={index}>
                                                        {item.title__c}
                                                        <span className="float-right">
                                                            ${item.cost__c}
                                                        </span>
                                                    </p>
                                                )
                                            }

                                        </div>
                                        <div className="contents element-282">
                                            <h5>Recurring Charges <span className="float-right">$29/mo</span></h5>
                                            <p>Help for Trauma App <span className="float-right">$29/mo</span></p>
                                            <p>Professional edfion</p>
                                        </div>
                                        <div className="input-holder field-text">
                                            <div className="field-element ">
                                                <input id="pronto" type="text" name="pronto" defaultValue="" placeholder="Enter Prontion Code" data-label-inside="Last Name" className="shortnice form-input  required  " />
                                            </div>
                                        </div>
                                        <h6>Total Due <span>$923</span></h6>

                                        <button onClick={this.confirmOrder} className="btn submit-button button_submit dynamic-button  corners  ">Checkout</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal className="static-modal-confirm" show={this.state.showModalDialog} onHide={this.closeDialog}>

                    <Modal.Body>

                       <h2>Please select date</h2>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeDialog}>Cancel</Button>
                       
                    </Modal.Footer>
                </Modal>




            </div>
        );
    }
};
export default Checkout;