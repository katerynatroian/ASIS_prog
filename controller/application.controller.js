const Application = require('../model/application.model');

exports.findALL = function (req, res) {
    Application.findAll(function(err, application) {
        if (err) res.send(err);
        //res.send(application);
        res.render('application.ejs', {Application: application});
    });
};

exports.create = function (req, res) {
    const new_application = new Application (req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Application.create(new_application, function (err, application) {
            if (err)
                res.send(err);
            res.redirect('/api/application')
        });
    }
};

exports.findById = function (req, res) {
    Application.findById(req.params.id, function (err, application) {
        if (err) 
            res.send(err);
        //res.json(application);
        res.render('application_edit.ejs', {Application: application});
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Application.update(req.params.id, new Application(req.body), function (err, application){
            if (err) 
                res.send(err);
            //res.json({error: false, message: 'Application was successfully updated'});
            res.redirect('/api/application')
        });
    }
};


exports.delete = function (req, res) {
    Application.delete(req.params.id, function (err, application) {
        if (err)
            res.send(err);
        res.redirect('/api/application');
    });
}