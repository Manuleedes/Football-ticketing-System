const mongoose = require("mongoose");
var mongoURL="mongodb+srv://lidigu:lidigu@football.b1m9x.mongodb.net/booking-football"

//const mongoURL = process.env.mongoURL;


mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
    console.log("Mongo DB connection failed!");
});

connection.on("connected", () => {
    console.log("Mongo DB connection successful!");
});

module.exports = mongoose;