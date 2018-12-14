import axios from 'axios';
import AuthService from './AuthService';
export default class RecorderService extends AuthService {
    constructor() {
        super();
    }

    addUpdateRecording(recordingVo) {
        console.log('xxxxxx xxxxxxxxxx ', recordingVo);

        return axios.post(this.domain + '/recorder/add', recordingVo, super.setTokenToRequest())
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    getRecordingWithDrawing(eventId) {
        return axios.get(this.domain + '/recorder/get/' + eventId, super.setTokenToRequest())
            .then(result => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }



}
