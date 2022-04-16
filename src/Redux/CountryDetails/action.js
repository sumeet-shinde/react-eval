import axios from "axios";

export const ADD_COUNTRY = "ADD_COUNTRY";
export const ADD_COUNTRY_LOADING = "ADD_COUNTRY_LOADING";
export const ADD_COUNTRY_ERROR = "ADD_COUNTRY_ERROR";

export const addCountry = (country) => ({
  type: ADD_COUNTRY,
  payload: country,
});
export const addCountryLoading = () => ({ type: ADD_COUNTRY_LOADING });
export const addCountryError = () => ({ type: ADD_COUNTRY_ERROR });

export const addCountryRequest = (countryName) => async (dispatch) => {
  dispatch(addCountryLoading());
  axios
    .post("https://react-eval-backend.herokuapp.com/countries", {
      country: countryName,
    })
    .then(({ data }) => {
      dispatch(addCountry(data));
    })
    .catch((err) => {
      dispatch(addCountryError());
      console.log(err);
    });
};

export const getCountryRequest = () => async (dispatch) => {
  dispatch(addCountryLoading());
  axios
    .get("https://react-eval-backend.herokuapp.com/countries")
    .then(({ data }) => {
      dispatch(addCountry(data));
    })
    .catch((err) => {
      dispatch(addCountryError());
      console.log(err);
    });
};
