const express = require('express');
const router = express.Router();

const questionController = require('../../controllers/questionsController');

//Questions routes
router.post('/create',questionController.create);
router.get('/view/:id',questionController.showDetails);
router.delete('/delete/:id',questionController.deleteQues);

router.use('/options',require('./options'));


module.exports = router;