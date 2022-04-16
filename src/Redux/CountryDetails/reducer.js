import { ADD_COUNTRY, ADD_COUNTRY_ERROR, ADD_COUNTRY_LOADING } from "./action";

const initState = {
  countries: [],
  loading: false,
  error: false,
};

export const countryReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_COUNTRY:
      return { ...store, countries: payload, loading: false, error: false };

    case ADD_COUNTRY_LOADING:
      return { ...store, loading: true };

    case ADD_COUNTRY_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
