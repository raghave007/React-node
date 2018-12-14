import React, { Component } from 'react';

class ConfirmOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    makePayment = () => {
        this.props.history.replace('/register/payment');

    }

    render() {
        return (
            <div>
                <button onClick={this.makePayment}>Confirm Order</button>
            </div>
        );
    }
}

export default ConfirmOrder;
