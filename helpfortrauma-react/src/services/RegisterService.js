import axios from 'axios';
import AuthService from './AuthService';
export default class RegisterService extends AuthService {
    constructor() {
        super();
    }

    registerUser(userInfoVo) {
        return axios.post(this.domain + '/register/user', userInfoVo)
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    getSubscriberOptions() {
        return axios.get(this.domain + '/sf/get/subscriber')
            .then(result => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }



    // addEvent(req) {
    //     return axios.post(this.domain + '/event/add', req, super.setTokenToRequest())
    //         .then((response) => {
    //             console.log(response);
    //         }).catch((error) => {
    //             console.log(error);
    //         });
    // }

    // getEventsById(id) {
    //     return axios.get(this.domain + '/event/get/' + id , super.setTokenToRequest())
    //         .then(res => {
    //             return(res);
    //         }).catch(err => {
    //             console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
    //         });
    // }
}
