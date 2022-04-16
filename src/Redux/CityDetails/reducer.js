import { ADD_CITY_DATA, ADD_CITY_ERROR, ADD_CITY_LOADING } from "./action";

const initState = {
  cities: [],
  loading: false,
  error: false,
};

export const cityReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADD_CITY_DATA:
      return { ...store, cities: payload, loading: false, error: false };

    case ADD_CITY_LOADING:
      return { ...store, loading: true };

    case ADD_CITY_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
