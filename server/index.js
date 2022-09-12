// Import Begin

require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const connectdb = require("./db/connect");

const postRoutes = require("./routes/post");

// Import End

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to MEMPAD api");
});

app.use("/post", postRoutes);

// mongodb

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is Listening on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
