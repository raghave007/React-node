import axios from 'axios';
import AuthService from './AuthService';
export default class CoursesService extends AuthService {
    constructor() {
        super();
    }

    getCourses() {
        return axios.get(this.domain + '/sf/get/course', super.setTokenToRequest())
            .then(res => {
                return (res);
            }).catch(err => {
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            });
    }

    getLessons(courseId) {
        return axios.get(this.domain + '/sf/get/lessons/' + courseId, super.setTokenToRequest())
            .then(res => {
                return (res);
            }).catch(err => {
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            });
    }

    getQuesForLesson(lessonId) {
        return axios.get(this.domain + '/sf/get/questions/' + lessonId, super.setTokenToRequest())
            .then(res => {
                return (res);
            }).catch(err => {
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            });
    }

    getUserCourses(userId) {
        return axios.get(this.domain + '/sf/get/user/courses/' + userId, super.setTokenToRequest())
            .then(res => {
                return (res);
            }).catch(err => {
                console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
            });
    }

    
    buyCourse(userInfoVo) {
        return axios.post(this.domain + '/sf/buy/course', userInfoVo)
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }
}
