const express = require("express");
const app = express();
const cors = require("cors");

// enabling CORS for some specific origins only.
let corsOptions = {
  origin: ["https://gandalfs-pipeweed-dispensary.onrender.com"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from API server!" });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
