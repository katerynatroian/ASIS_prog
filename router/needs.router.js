const express = require('express')
const router = express.Router()
const NeedsController = require('../controller/needs.controller');
router.get('/', NeedsController.findALL);
router.post('/', NeedsController.create);
router.get('/:id', NeedsController.findById);
router.put('/:id', NeedsController.update);
router.delete('/:id', NeedsController.delete);
module.exports = router