const express = require('express');
const router = express.Router();


//Options routes
router.post('/:id/create',optionsController.create);
router.get('/:id/add_vote',optionsController.add_vote);
router.delete('/delete/:id',optionsController.delete);

module.exports = router;