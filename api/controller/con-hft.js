const query = require('../pg-connect');

exports.getAssessment = (req, res, next) => {
    console.log('xxxxxxxxxxxxx xxxxxxxxxxx get all init');
    const sql = "SELECT * FROM salesforce.Assessments__c WHERE assesment_type__c = " + "'" + req.params.assType + "'";
    console.log('xxxxxx xxxxxxx xxxxxxxx ', sql);

    query(sql)
        .then(data => {
            console.log(data);
            res.status(200).json({
                message: 'User Assessment',
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

exports.saveAssResult = (req, res, next) => {
    const sql = "INSERT INTO salesforce.Subscriber_Assessment__c (Subscriber__c, Assessments__c, Name, Question_1__c, Question_2__c, Question_3__c, Question_4__c, Question_5__c, Question_6__c, Question_7__c, Question_8__c, Question_9__c, Question_10__c, Question_11__c, Question_12__c, Question_13__c, Question_14__c, Question_15__c, Question_16__c, Question_17__c, Question_18__c, Question_19__c, Question_20__c, Question_21__c, Question_22__c, Question_23__c, Question_24__c,Question_25__c, Question_26__c, Question_27__c, Question_28__c, Question_29__c, Question_30__c,Question_31__c, Question_32__c, Question_33__c, Question_34__c, Question_35__c, Question_36__c,Question_37__c, Question_38__c, Question_39__c, Question_40__c, Question_41__c, Question_42__c, Question_43__c, Question_44__c, Question_45__c) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48) RETURNING id";



    const dataArr = _setDataArr(req);

    query(sql, dataArr)
        .then(data => {
            console.log(data);
            res.status(200).json({
                message: 'User Assessment Saved Successfully',
                success: true,
                body: data.rows
            });

        }).catch(err => {
            console.log('xxxxxxx xxxxxxx xxxxxxxx err ', err);
            res.status(404).json({
                message: 'Backend Error',
                success: false,
                body: err
            });
        });


}

function _setDataArr(req) {
    let ansMap = new Map(JSON.parse(req.body.ansMap));
    let keys = [...ansMap.keys()];
    let ans = [];
    keys.forEach((val, index) => {
        ans.push(ansMap.get(val).ans);
    });

    let finalArr = [
        req.userData.sfid,
        req.body.assId,
        req.body.assName,
        ...ans
    ];

    let temp = [];
    for (let i = 1; i <= 48 - finalArr.length; i++) {
        temp.push(null);
    }

    console.log('xxxx xxx ', finalArr);

    return [...finalArr, ...temp];
}
