import countries from "utils/countries.min.json";

const getCountries = () => {
  return Object.keys(countries);
};

export const getState = (country: string) => {
    return countries[country];
}; 

export default getCountries;
