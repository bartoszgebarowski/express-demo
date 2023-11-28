const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9001;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});