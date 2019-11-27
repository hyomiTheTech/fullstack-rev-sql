var mysql = require('mysql');

var db = mysql.createConnection({
    database: "ebayDB",
    user: "root",
    password: ""
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = db;
