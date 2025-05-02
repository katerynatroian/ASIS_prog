var connection = require('../config/config.bd');
var Payment = function (payment) {
    this.ID_payment = payment.ID_payment;
    this.ID_client = payment.ID_client;
    this.DatePayment = payment.DatePayment;
    this.Cost = payment.Cost;
}

Payment.create = function (newPayment, result) {
    connection.query("INSERT INTO payment set ?", newPayment, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Payment.findById = function (id, result) {
    connection.query("Select * from payment where ID_payment = ? ", id,
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
};

Payment.findAll = function (result) {
    connection.query("Select * from payment",
        function(err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                console.log('Payment : ', res);
                result(null, res);
            }
        });
};

Payment.update = function (id, payment, result) {
    connection.query("UPDATE payment SET ID_client=?,DatePayment=?,Cost=? WHERE ID_payment = ?",
    [payment.ID_client, payment.DatePayment, payment.Cost, id],
    function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Payment.delete = function (id, result) {
    connection.query("DELETE FROM payment WHERE ID_payment = ? ", [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};
module.exports = Payment;