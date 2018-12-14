const query = require('../pg-connect');

exports.getSubscriber = (req, res, next) => {
    console.log('xxxxxxxxxxxxx xxxxxxxxxxx get all init');
    const sql = 'SELECT * FROM salesforce.I_am_here_for__c';
    console.log('xxxxxx xxxxxxx xxxxxxxx ', sql);

    query(sql)
        .then(data => {
            console.log(data);
            res.status(200).json({
                message: 'I am here for options',
                success: true,
                body: data.rows
            });

        }).catch(err => {
            res.status(404).json({
                message: 'Backend Error',
                success: false,
                body: err
            });
        });
}

/* *******************************Get Courses************************************* */
exports.getCourse = (req, res, next) => {
    console.log('xxxxxxxxxxxxx xxxxxxxxxxx get all init');
    const sql = 'SELECT * FROM salesforce.Course__c';
    console.log('xxxxxx xxxxxxx xxxxxxxx ', sql);

    query(sql)
        .then(data => {
            console.log(data);
            res.status(200).json({
                message: 'all registerd users',
                success: true,
                body: data.rows
            });

        }).catch(err => {
            res.status(400).json({
                message: 'Backend Error',
                success: false,
                body: err
            });
        });
}

exports.getLessons = (req, res, next) => {
    const sql = "SELECT *, Course__c FROM salesforce.Lessons__c WHERE Course__c = " + "'" + req.params.courseId + "'";
    console.log('xxxxxx xxxxxxx xxxxxxxx ', sql);

    query(sql)
        .then(data => {
            console.log(data);
            res.status(200).json({
                message: 'Lessons',
                success: true,
                body: data.rows
            });

        }).catch(err => {
            res.status(200).json({
                message: 'Backend Error',
                success: false,
                body: err
            });
        });
}

exports.getKnowledgeCheckQues = (req, res, next) => {
    const sql = "SELECT * FROM salesforce.Knowledge_Check__c WHERE lessons__c = " + "'" + req.params.lessonId + "'";
    console.log('xxxxxx xxxxxxx xxxxxxxx ', sql);

    query(sql)
        .then(data => {
            console.log(data);
            res.status(200).json({
                message: 'Knowledge Check questions for lesson are',
                success: true,
                body: data.rows
            });

        }).catch(err => {
            res.status(200).json({
                message: 'Backend Error',
                success: false,
                body: err
            });
        });
}

exports.getUserCourses = (req, res, next) => {
    const sql = "SELECT Course__c FROM salesforce.Subscriber_Course__c WHERE Subscriber__c = " + "'" + req.params.userId + "'";
    console.log(sql);
    query(sql)
        .then(courses => {
            console.log(courses);
            res.status(200).json({
                message: 'The User Courses are',
                success: true,
                body: courses.rows
            });
        }).catch(err => {
            console.log(courses);

            res.status(400).json({
                message: 'Backend Error',
                success: false,
                body: err
            });
        })
}

/* *******************************Buy Courses************************************* */
exports.buyCourse = (req, res, next) => {
    const sql = 'INSERT INTO salesforce.Subscriber_Course__c (Course__c, Name, Subscriber__c, Subscriber__r__UserName__c) VALUES($1,$2,$3,$4) RETURNING id';

    const body = _setBodyForBuyCourse(req.body);
    query(sql, body)
        .then(data => {
            console.log('xxxxxxx xxxxxxxxxxxxxxx result is ', data);
            res.status(200).json({
                message: 'Subscribed to course successfully',
                success: true,
                body: data.rows
            });
        }).catch(err => {
            res.status(400).json({
                message: 'Backend Error',
                success: false,
                body: err
            });
            console.log('xxxxxxx xxxxxxxxxxxxxxx err is ', err);
        });
}

function _setBodyForBuyCourse(data) {
    const reqObj = [
        data.courseId,
        data.courseName,
        data.usrId,
        data.username,
    ]
    return reqObj;
}
