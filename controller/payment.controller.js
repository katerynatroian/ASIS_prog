const Payment = require('../model/payment.model');

exports.findALL = function (req, res) {
    Payment.findAll(function(err, payment) {
        if (err) res.send(err);
        res.send(payment);
    });
};

exports.create = function (req, res) {
    const new_payment = new Payment (req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Payment.create(new_payment, function (err, payment) {
            if (err)
                res.send(err);
            res.json({error: false, message:'Payment is created', data: payment})
        });
    }
};

exports.findById = function (req, res) {
    Payment.findById(req.params.id, function (err, payment) {
        if (err) 
            res.send(err);
        res.json(payment);
        if (!payment) {
            return res.status(404).send({ message: 'Payment not found' });
        }
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Payment.update(req.params.id, new Payment(req.body), function (err, payment){
            if (err) 
                res.send(err);
            res.json({error: false, message: 'Payment was successfully updated'});
        });
    }
};


exports.delete = function (req, res) {
    Payment.delete(req.params.id, function (err, payment) {
        if (err)
            res.send(err);
        res.json({error: false, message: 'Payment was successfully deleted'});
    });
}