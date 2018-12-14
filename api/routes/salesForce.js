const express = require('express');
const router = express.Router();
const conSf = require('../controller/con-sf');
const checkAuth = require('../middleware/check-auth');


/* ****************************Login User and Authenticate**************************** */
router.get('/get/subscriber', conSf.getSubscriber);

/* *******************************Get Courses************************************* */
router.get('/get/course', conSf.getCourse);

/* ********************* Get Lessons of a course **************************** */
router.get('/get/lessons/:courseId', checkAuth, conSf.getLessons);

/* ********************** Get the questions for the lesson ************************* */
router.get('/get/questions/:lessonId', conSf.getKnowledgeCheckQues);

/* ********************** Get the questions for the lesson ************************* */
router.get('/get/user/courses/:userId', checkAuth, conSf.getUserCourses);

/* *******************************Buy Courses************************************* */
router.post('/buy/course', checkAuth, conSf.buyCourse);

module.exports = router;