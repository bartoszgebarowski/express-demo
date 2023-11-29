const filterCountriesData = (countriesDetails) => {
  let formattedCountries = [];
  countriesDetails.map((countriesDetail) =>
    formattedCountries.push({
      common_name: countriesDetail.name.common,
      official_name: countriesDetail.name.official,
      flag: countriesDetail.flags.svg,
      flagDescription: countriesDetail.flags.alt,
      capital: countriesDetail.capital,
      population: countriesDetail.population,
      currencies: countriesDetail.currencies,
      timezones: countriesDetail.timezones,
    })
  );
  return formattedCountries;
};

module.exports = { filterCountriesData };
