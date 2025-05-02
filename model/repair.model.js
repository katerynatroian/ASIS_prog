var connection = require('../config/config.bd');
var Repair = function (repair) {
    this.ID_repair = repair.ID_repair;
    this.ID_app = repair.ID_app;
    this.DateBegin = repair.DateBegin;
    this.DateEnd = repair.DateEnd;
    this.Name_repair = repair.Name_repair;
    this.Description = repair.Description;
}

Repair.create = function (newRepair, result) {
    connection.query("INSERT INTO repair set ?", newRepair, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Repair.findById = function (id, result) {
    connection.query("Select * from repair where ID_repair = ? ", id,
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
};

Repair.findAll = function (result) {
    connection.query("Select * from repair",
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log('Repair : ', res);
                result(null, res);
            }
        });
};

Repair.update = function (id, repair, result) {
    connection.query("UPDATE repair SET ID_app=?,DateBegin=?,DateEnd=?,Name_repair=?,Description=? WHERE ID_repair = ?",
    [repair.ID_app, repair.DateBegin, repair.DateEnd, repair.Name_repair, repair.Description, id],
    function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Repair.delete = function (id, result) {
    connection.query("DELETE FROM repair WHERE ID_repair = ? ", [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
module.exports = Repair;