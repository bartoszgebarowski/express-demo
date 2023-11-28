const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/:country_name", async (req, res) => {
  const { country_name } = req.params;
  const countriesApiUrl = `https://restcountries.com/v3.1/name/${country_name}`;
  try {
    let countriesApiResponse = await axios.get(`${countriesApiUrl}`);
    res.send(countriesApiResponse.data);
  } catch (err) {
    res.sendStatus(err.response.status);
  }
});

module.exports = router;
