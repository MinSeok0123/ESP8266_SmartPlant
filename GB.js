const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  let value = req.body;
  console.log(value);
  res.json({
    susccess: true,
  });
});

app.listen(5000, () => {
  console.log("server is started");
});
