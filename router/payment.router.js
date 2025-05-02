const express = require('express')
const router = express.Router()
const PaymentController = require('../controller/payment.controller');
router.get('/', PaymentController.findALL);
router.post('/', PaymentController.create);
router.get('/:id', PaymentController.findById);
router.put('/:id', PaymentController.update);
router.delete('/:id', PaymentController.delete);
module.exports = router