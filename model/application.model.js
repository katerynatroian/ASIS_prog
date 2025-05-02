var connection = require('../config/config.bd');
var Application = function (application) {
    this.ID_app = application.ID_app;
    this.ID_client = application.ID_client;
    this.DateOrder = application.DateOrder;
    this.Status = application.Status;
}

Application.create = function (newApplication, result) {
    connection.query("INSERT INTO application set ?", newApplication, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Application.findById = function (id, result) {
    connection.query("Select * from application where ID_app = ? ", id,
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
};

Application.findAll = function (result) {
    connection.query("Select * from application",
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log('Application : ', res);
                result(null, res);
            }
        });
};

Application.update = function (id, application, result) {
    connection.query("UPDATE application SET ID_client=?,DateOrder=?,Status=? WHERE ID_app = ?",
    [application.ID_client, application.DateOrder, application.Status, id],
    function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Application.delete = function (id, result) {
    connection.query("DELETE FROM application WHERE ID_app= ? ", [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
module.exports = Application;