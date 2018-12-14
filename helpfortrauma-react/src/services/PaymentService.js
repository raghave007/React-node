import axios from 'axios';
import AuthService from './AuthService';
export default class PaymentService extends AuthService {
    constructor() {
        super();
    }

    goToStripe(token) {
        return axios.post(this.domain + '/register/stripe/payment/checkout', token)
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }
}
