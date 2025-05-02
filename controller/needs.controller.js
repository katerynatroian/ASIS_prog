const Needs = require('../model/needs.model');

exports.findALL = function (req, res) {
    Needs.findAll(function(err, needs) {
        if (err) res.send(err);
        res.send(needs);
    });
};

exports.create = function (req, res) {
    const new_needs = new Needs (req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Needs.create(new_needs, function (err, needs) {
            if (err)
                res.send(err);
            res.json({error: false, message:'Needs is created', data: needs})
        });
    }
};

exports.findById = function (req, res) {
    Needs.findById(req.params.id, function (err, needs) {
        if (err) 
            res.send(err);
        res.json(needs);
        if (!needs) {
            return res.status(404).send({ message: 'Needs not found' });
        }
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Needs.update(req.params.id, new Needs(req.body), function (err, needs){
            if (err) 
                res.send(err);
            res.json({error: false, message: 'Needs was successfully updated'});
        });
    }
};


exports.delete = function (req, res) {
    Needs.delete(req.params.id, function (err, needs) {
        if (err)
            res.send(err);
        res.json({error: false, message: 'Needs was successfully deleted'});
    });
}