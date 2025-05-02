var connection = require('../config/config.bd');
var Client = function (client) {
    this.ID_client = client.ID_client;
    this.PIB_client = client.PIB_client;
    this.Mail_client = client.Mail_client;
    this.Phone_client = client.Phone_client;
    this.Address = client.Address;
    this.Client_type = client.Client_type;
}

Client.create = function (newClient, result) {
    connection.query("INSERT INTO client set ?", newClient, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Client.findById = function (id, result) {
    connection.query("Select * from client where ID_client = ? ", id,
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
};

Client.findAll = function (result) {
    connection.query("Select * from client",
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log('Client : ', res);
                result(null, res);
            }
        });
};

Client.update = function (id, client, result) {
    connection.query("UPDATE client SET PIB_client=?,Mail_client=?,Phone_client=?,Address=?,Client_type=? WHERE ID_client = ?",
    [client.PIB_client, client.Mail_client, client.Phone_client, client.Address, client.Client_type, id],
    function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Client.delete = function (id, result) {
    connection.query("DELETE FROM client WHERE ID_client= ? ", [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
module.exports = Client;