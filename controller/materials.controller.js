const Materials = require('../model/materials.model');

exports.findALL = function (req, res) {
    Materials.findAll(function(err, materials) {
        if (err) res.send(err);
        res.send(materials);
    });
};

exports.create = function (req, res) {
    const new_materials = new Materials (req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Materials.create(new_materials, function (err, materials) {
            if (err)
                res.send(err);
            res.json({error: false, message:'Materials is created', data: materials})
        });
    }
};

exports.findById = function (req, res) {
    Materials.findById(req.params.id, function (err, materials) {
        if (err) 
            res.send(err);
        res.json(materials);
        if (!materials) {
            return res.status(404).send({ message: 'Materials not found' });
        }
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Materials.update(req.params.id, new Materials(req.body), function (err, materials){
            if (err) 
                res.send(err);
            res.json({error: false, message: 'Materials was successfully updated'});
        });
    }
};


exports.delete = function (req, res) {
    Materials.delete(req.params.id, function (err, materials) {
        if (err)
            res.send(err);
        res.json({error: false, message: 'Materials was successfully deleted'});
    });
}