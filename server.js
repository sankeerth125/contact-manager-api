const dotenc = require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const middlewareFn = (req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
};

app.use(middlewareFn);

app.use(express.json()); //express middleware that parses req, res

app.use("/api/contacts", require("./Routes/contact-routes"));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
