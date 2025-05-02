const express = require('express')
const router = express.Router()
const MaterialsController = require('../controller/materials.controller');
router.get('/', MaterialsController.findALL);
router.post('/', MaterialsController.create);
router.get('/:id', MaterialsController.findById);
router.put('/:id', MaterialsController.update);
router.delete('/:id', MaterialsController.delete);
module.exports = router