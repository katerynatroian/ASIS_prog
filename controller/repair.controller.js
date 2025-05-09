const Repair = require('../model/repair.model');

exports.findALL = function (req, res) {
    Repair.findAll(function(err, repair) {
        if (err) res.send(err);
        //res.send(repair);
        res.render('repair.ejs', {Repair: repair});
    });
};

exports.create = function (req, res) {
    const new_repair = new Repair (req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Repair.create(new_repair, function (err, repair) {
            if (err)
                res.send(err);
            res.redirect('/api/repair')
        });
    }
};

exports.findById = function (req, res) {
    Repair.findById(req.params.id, function (err, repair) {
        if (err) 
            res.send(err);
        //res.json(repair);
        res.render('repair_edit.ejs', {Repair: repair});
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Repair.update(req.params.id, new Repair(req.body), function (err, repair){
            if (err) 
                res.send(err);
            //res.json({error: false, message: 'Repair was successfully updated'});
            res.redirect('/api/repair')
        });
    }
};


exports.delete = function (req, res) {
    Repair.delete(req.params.id, function (err, repair) {
        if (err)
            res.send(err);
        res.redirect('/api/repair');
    });
}