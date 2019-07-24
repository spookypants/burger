var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "h3lpc0mput3r",
//     database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'h3lpc0mput3r',
        database: 'burgers_db'
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;