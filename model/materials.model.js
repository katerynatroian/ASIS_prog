var connection = require('../config/config.bd');
var Materials = function (materials) {
    this.ID_material = materials.ID_material;
    this.Name_material = materials.Name_material;
}

Materials.create = function (newMaterials, result) {
    connection.query("INSERT INTO materials set ?", newMaterials, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Materials.findById = function (id, result) {
    connection.query("Select * from materials where ID_material = ? ", id,
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
};

Materials.findAll = function (result) {
    connection.query("Select * from materials",
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log('Material : ', res);
                result(null, res);
            }
        });
};

Materials.update = function (id, materials, result) {
    connection.query("UPDATE materials SET Name_material=? WHERE ID_material = ?",
    [materials.Name_material, id],
    function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Materials.delete = function (id, result) {
    connection.query("DELETE FROM materials WHERE ID_material= ? ", [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
module.exports = Materials;