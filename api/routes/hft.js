const express = require('express');
const router = express.Router();
const conHft = require('../controller/con-hft');
const checkAuth = require('../middleware/check-auth');


/* ****************************Get Assesment**************************** */
router.get('/assessment/:assType', checkAuth, conHft.getAssessment);

/* ****************************Get Assesment**************************** */
router.post('/assessment/save_result', checkAuth, conHft.saveAssResult);

module.exports = router;