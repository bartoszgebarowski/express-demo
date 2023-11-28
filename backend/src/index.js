const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9001;
const countryRoute = require("./routes/country.js");

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api", countryRoute);
