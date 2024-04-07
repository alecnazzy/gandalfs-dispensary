const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from API server!" });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
