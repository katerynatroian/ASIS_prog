const express = require('express')
const router = express.Router()
const RepairerController = require('../controller/repairer.controller');
router.get('/', RepairerController.findALL);
router.post('/', RepairerController.create);
router.get('/:id', RepairerController.findById);
router.put('/:id', RepairerController.update);
router.delete('/:id', RepairerController.delete);
module.exports = router