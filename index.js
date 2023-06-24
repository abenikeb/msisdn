const express = require("express");
const app = express();
const msisdn = require("express-msisdn");

// add msisdn middleware
app.use(msisdn());
const port = 8080;

app.get("/userinfo", (req, res) => {
  res.json({ "msisdn": req.headers.msisdn });
  // res.json({"msisdn_":"YOUR MSISDN:"});
  console.log("Your msisdn is : "+req.headers.msisdn);
});

app.listen(port, () =>
  console.log(`Msisdn example app listening on port ${port}!`)
);
