const { Router } = require("express");
const axios = require("axios");

const router = Router();
const { filterCountriesData } = require("../utils/filterCountriesData.js");

router.get("/:country_name", async (req, res) => {
  const { country_name } = req.params;
  const countriesApiUrl = `https://restcountries.com/v3.1/name/${country_name}`;
  let validApiResponseData;
  let filteredCountriesData;
  try {
    let countriesApiResponse = await axios.get(`${countriesApiUrl}`);
    validApiResponseData = countriesApiResponse.data;
    filteredCountriesData = filterCountriesData(validApiResponseData);
    res.send(filteredCountriesData);
  } catch (err) {
    if (err.response.status) {
      res.sendStatus(err.response.status);
    } else {
      res.sendStatus(500);
    }
  }
});

module.exports = router;
