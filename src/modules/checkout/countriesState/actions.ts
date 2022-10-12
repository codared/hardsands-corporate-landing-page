import { AppActionCreator } from "redux/store";
import { ThunkActionCreator } from "redux/rootReducer";
import { ExchangeRateMap, getExchangeRates } from "utils/forex";
import { fetchCountries, fetchCountryPlusProvinces } from "./../checkoutApi";
import { CountryResponse } from "./../types";
import {
  COUNTRIES_RECEIVED,
  COUNTRY_AND_PROVINCES_RECEIVED,
  GET_EXCHANGE_RATES,
  SET_SHIPPING_COUNTRIES,
} from "./actionTypes";
import { selectCountries } from "./selectors";

const countriesReceived: AppActionCreator = (
  receivedCountries: CountryResponse[]
) => {
  return {
    type: COUNTRIES_RECEIVED,
    countries: receivedCountries,
  };
};

export const setShippingCountries: AppActionCreator = (countries: string[]) => {
  return {
    type: SET_SHIPPING_COUNTRIES,
    countries: countries,
  };
};

const countryAndProvincesReceived: AppActionCreator = (
  receivedCountry: CountryResponse
) => {
  return {
    type: COUNTRY_AND_PROVINCES_RECEIVED,
    country: receivedCountry,
  };
};

const exchangeRatesReceived: AppActionCreator = (
  exchangeRates: ExchangeRateMap
) => {
  return {
    type: GET_EXCHANGE_RATES,
    payload: {
      exchangeRates,
    },
  };
};

export const loadCountries: ThunkActionCreator<Promise<CountryResponse[]>> =
  () => async (dispatch, getState) => {
    let countries = selectCountries(getState());
    if (countries.length === 0) {
      countries = await fetchCountries();
      dispatch(countriesReceived(countries));
    }
    return countries;
  };

export const getCountryPlusProvinces: ThunkActionCreator<
  Promise<CountryResponse>
> = (countryId: string) => async (dispatch, getState) => {
  let country = selectCountries(getState()).find(
    (country) => country.id === countryId && country.provincesReceived
  );
  if (!country) {
    country = await fetchCountryPlusProvinces(countryId);
    dispatch(countryAndProvincesReceived(country));
  }
  return country;
};

export const getExchangeRatesAction: ThunkActionCreator<
  Promise<ExchangeRateMap>
> = () => async (dispatch) => {
  const exchangeRates = await getExchangeRates();
  dispatch(exchangeRatesReceived(exchangeRates));
  return exchangeRates;
};
