var connection = require('../config/config.bd');
var Needs = function (needs) {
    this.ID_needs = needs.ID_needs;
    this.ID_material = needs.ID_material;
    this.ID_repair = needs.ID_repair;
    this.Number_material = needs.Number_material;
}

Needs.create = function (newNeeds, result) {
    connection.query("INSERT INTO needs set ?", newNeeds, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Needs.findById = function (id, result) {
    connection.query("Select * from needs where ID_needs = ? ", id,
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
};

Needs.findAll = function (result) {
    connection.query("Select * from needs",
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log('Needs : ', res);
                result(null, res);
            }
        });
};

Needs.update = function (id, needs, result) {
    connection.query("UPDATE needs SET ID_material=?,ID_repair=?,Number_material=? WHERE ID_needs = ?",
    [needs.ID_material, needs.ID_repair, needs.Number_material, id],
    function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Needs.delete = function (id, result) {
    connection.query("DELETE FROM needs WHERE ID_needs= ? ", [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
module.exports = Needs;