const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello from Homepage");
});
app.get("/about", (req, res) => {
  return res.send(`Hey ${req.query.name} and you are in ${req.query.age}`);
});

app.get("/*", (req, res) => {
  return res.send("Page not found");
});
app.listen(8000, () => console.log("Server started"));
