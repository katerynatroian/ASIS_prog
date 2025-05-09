const Client = require('../model/client.model');

exports.findALL = function (req, res) {
    Client.findAll(function(err, client) {
        if (err) res.send(err);
        //res.send(client);
        res.render('client.ejs', {Client: client});
    });
};

exports.create = function (req, res) {
    const new_client = new Client (req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Client.create(new_client, function (err, client) {
            if (err)
                res.send(err);
            res.redirect('/api/client')
        });
    }
};

exports.findById = function (req, res) {
    Client.findById(req.params.id, function (err, client) {
        if (err) 
            res.send(err);
        //res.json(client);
        res.render('client_edit.ejs', {Client: client});
    });
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required fields'})
    } else {
        Client.update(req.params.id, new Client(req.body), function (err, client){
            if (err) 
                res.send(err);
            //res.json({error: false, message: 'Client was successfully updated'});
            res.redirect('/api/client')
        });
    }
};


exports.delete = function (req, res) {
    Client.delete(req.params.id, function (err, client) {
        if (err)
            res.send(err);
        res.redirect('/api/client');
    });
}