// Load the Mongoose package
const mongoose = require("mongoose");

// Connection URI for MongoDB instance
// const uri = "mongodb://localhost:27017";
const uri = "mongodb://127.0.0.1:27017/Notes";

// Connect to the MongoDB instance
const mongoConnect = () => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("connected", function () {
    console.log("Connected successfully to MongoDB server");
  });
};

module.exports = mongoConnect;
