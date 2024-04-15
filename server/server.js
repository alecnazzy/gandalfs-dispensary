require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const mongoString = process.env.MONGODB_URI;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const routes = require("./routes/routes");

const cors = require("cors");
let corsOptions = {
  origin: [
    "https://gandalfs-pipeweed-dispensary.onrender.com",
    "http://localhost:3000",
  ],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", routes);

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from API server!" });
// });

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
