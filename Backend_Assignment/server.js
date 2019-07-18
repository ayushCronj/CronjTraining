var express = require('express');
var app = express();
var mongoose = require('mongoose');
// const uuidv4 = require('uuid/v4');
app.use(express.json());

//database connection
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Database Connected");
});

require("./Routes/routes")(app);
app.listen(3002);