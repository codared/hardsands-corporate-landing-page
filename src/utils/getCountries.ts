import countries from "utils/countries.min.json";
import countriesList from "utils/countries_full.json";
import statesList from "utils/provinces.json";

export const getCountries = () => {
  return Object.keys(countries);
};

export const getState = (country: string) => {
  return countries[country];
};

export const getCountriesList = () => {
  return countriesList.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
};

export const getStatesList = (countryId: string) => {
  return statesList.filter((state) => state.country_id === countryId);
};

export const getCountryPhoneCode = () => {
  return getCountriesList().map((country) => ({
    key: country.id,
    value: country.dial_code,
    title: `${country.name} (${country.dial_code})`,
  }));
};

export default getCountries;
