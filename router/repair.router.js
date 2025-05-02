const express = require('express')
const router = express.Router()
const RepairController = require('../controller/repair.controller');
router.get('/', RepairController.findALL);
router.post('/', RepairController.create);
router.get('/:id', RepairController.findById);
router.put('/:id', RepairController.update);
router.delete('/:id', RepairController.delete);
module.exports = router