var connection = require('../config/config.bd');
var Repairer = function (repairer) {
    this.ID_Repairer = repairer.ID_Repairer;
    this.ID_repair = repairer.ID_repair;
    this.PIB_repairer = repairer.PIB_repairer;
    this.Mail_repairer = repairer.Mail_repairer;
    this.Phone_repairer = repairer.Phone_repairer;
}

Repairer.create = function (newRepairer, result) {
    connection.query("INSERT INTO repairer set ?", newRepairer, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Repairer.findById = function (id, result) {
    connection.query("Select * from repairer where ID_Repairer = ? ", id,
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
};

Repairer.findAll = function (result) {
    connection.query("Select * from repairer",
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log('Repairer : ', res);
                result(null, res);
            }
        });
};

Repairer.update = function (id, repairer, result) {
    connection.query("UPDATE repairer SET ID_repair=?,PIB_repairer=?,Mail_repairer=?,Phone_repairer=? WHERE ID_Repairer = ?",
    [repairer.ID_repair, repairer.PIB_repairer, repairer.Mail_repairer, repairer.Phone_repairer, id],
    function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Repairer.delete = function (id, result) {
    connection.query("DELETE FROM repairer WHERE ID_Repairer= ? ", [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
module.exports = Repairer;