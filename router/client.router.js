const express = require('express')
const router = express.Router()
const ClientController = require('../controller/client.controller');
router.get('/', ClientController.findALL);
router.post('/', ClientController.create);
router.get('/:id', ClientController.findById);
router.put('/:id', ClientController.update);
router.delete('/:id', ClientController.delete);
module.exports = router