const Repairer = require('../model/repairer.model');

exports.findALL = function (req, res) {
    Repairer.findAll(function(err, repairer) {
        if (err) res.send(err);
        res.send(repairer);
    });
};

exports.create = function (req, res) {
    const new_repairer = new Repairer (req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Repairer.create(new_repairer, function (err, repairer) {
            if (err)
                res.send(err);
            res.json({error: false, message:'Repairer is created', data: repairer})
        });
    }
};

exports.findById = function (req, res) {
    Repairer.findById(req.params.id, function (err, repairer) {
        if (err) 
            res.send(err);
        res.json(repairer);
        if (!repairer) {
            return res.status(404).send({ message: 'Repairer not found' });
        }
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Repairer.update(req.params.id, new Repairer(req.body), function (err, repairer){
            if (err) 
                res.send(err);
            res.json({error: false, message: 'Repairer was successfully updated'});
        });
    }
};


exports.delete = function (req, res) {
    Repairer.delete(req.params.id, function (err, repairer) {
        if (err)
            res.send(err);
        res.json({error: false, message: 'Repairer was successfully deleted'});
    });
}