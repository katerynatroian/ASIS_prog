const express = require('express')
const router = express.Router()
const ApplicationController = require('../controller/application.controller');
router.get('/', ApplicationController.findALL);
router.post('/', ApplicationController.create);
router.get('/:id', ApplicationController.findById);
router.post('/put/:id', ApplicationController.update);
router.get('/delete/:id', ApplicationController.delete);
module.exports = router