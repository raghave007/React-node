import axios from 'axios';
import AuthService from './AuthService';
export default class DCanvasService extends AuthService {
    constructor() {
        super();
    }

    getImageFromText(addTextVo) {

        return axios.post(this.domain + '/img/converter', addTextVo)
            .then((response) => {
                console.log(response);
                return response;
            }).catch((error) => {
                console.log(error);
            });
    }

    addDrawing(drawingVo) {
        return axios.post(this.domain + '/gn/add', drawingVo, super.setTokenToRequest())
            .then((response) => {
                console.log('xxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx object is xxxxx xxxxxxx', drawingVo);
                return response;
            }).catch((error) => {
                console.log(error);
            });
    }

    getDrawing(eventId) {
        return axios.get(this.domain + '/gn/drawing/' + eventId, super.setTokenToRequest())
            .then((response) => {
                console.log(response);
                return response;
            }).catch((error) => {
                console.log(error);
            });
    }

    getDrawingPdf(eventId) {
        axios({
            url: this.domain + '/gn/pdf/' + eventId,
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf');
            document.body.appendChild(link);
            link.click();
        });
    }

    removeDrawingById(eventId) {
        return axios.delete(this.domain + '/gn/remove/' + eventId, super.setTokenToRequest())
            .then((response) => {
                console.log(response);
                return response;
            }).catch((error) => {
                console.log(error);
            });
    }

    updateDrawingTitle(updateTitleVo) {
        return axios.post(this.domain + '/gn/update/title', updateTitleVo, super.setTokenToRequest())
            .then((response) => {
                console.log('xxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxx object is xxxxx xxxxxxx', updateTitleVo);
                return response;
            }).catch((error) => {
                console.log(error);
            });
    }
}
