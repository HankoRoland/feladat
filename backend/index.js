const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const fs = require("fs");
const fsp = require("fs").promises;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Trainspotting API");
});

let ts;

fs.readFile("./ts.json", (err, data) => {
  ts = JSON.parse(data);
});


app.get("/api/trainspotting", (req, res) => {
  setTimeout(() => res.json(ts), 2000)
  // res.json(ts)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
