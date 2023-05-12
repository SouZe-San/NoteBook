const mongoConnect = require("./dataConnect");
const express = require("express");

// Define the Express Port
const app = express();
const port = 8000; // In this port our Backend server will run

// Mongo Connection
mongoConnect();

// Middleware ===
app.use(express.json()); // THis Middleware help to use the Request body as jason formate

app.get("/", (req, res) => {
  res.send("heloo");
});
// Available Routes
app.use("/api/auth", require("./routes/authentication"));
app.use("/api/notes", require("./routes/notes"));

// Listing The Server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/  `);
});
