require("dotenv").config({ path: "../.env" });
console.log("url : ", process.env.MONGODB_URI);
const express = require("express");
const mongoClient = require("./config/connection");

const app = express();
app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
