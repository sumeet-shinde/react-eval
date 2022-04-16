import axios from "axios";

export const ADD_CITY_DATA = "ADD_CITY_DATA";
export const ADD_CITY_LOADING = "ADD_CITY_LOADING";
export const ADD_CITY_ERROR = "ADD_CITY_ERROR";

export const addCityData = (city) => ({ type: ADD_CITY_DATA, payload: city });
export const addCityLoading = () => ({ type: ADD_CITY_LOADING });
export const addCityError = () => ({ type: ADD_CITY_ERROR });

export const addCityRequest =
  (cityName, Population, countryName) => async (dispatch) => {
    dispatch(addCityLoading());
    axios
      .post("https://react-eval-backend.herokuapp.com/cities", {
        city: cityName,
        population: Population,
        country: countryName,
      })
      .then(({ data }) => {
        dispatch(addCityData(data));
        console.log(data);
      })
      .catch((err) => {
        dispatch(addCityError());
        console.log(err);
      });
  };

export const getCityRequest = () => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .get("https://react-eval-backend.herokuapp.com/cities")
    .then(({ data }) => {
      if (!data.length) {
        return;
      }
      dispatch(addCityData(data));
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

export const deleteCityRequest = (id) => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .delete(`https://react-eval-backend.herokuapp.com/cities/${id}`)
    .then(() => {
      dispatch(getCityRequest());
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

export const filterDataRequest = (Country) => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .get(`https://react-eval-backend.herokuapp.com/cities?country=${Country}`)
    .then(({ data }) => {
      if (!data.length) {
        return;
      }
      dispatch(addCityData(data));
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

export const sortCityAscRequest = () => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .get(
      "https://react-eval-backend.herokuapp.com/cities?_sort=population&_order=desc"
    )
    .then(({ data }) => {
      if (!data.length) {
        return;
      }
      dispatch(addCityData(data));
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

export const sortCityDescRequest = () => async (dispatch) => {
  dispatch(addCityLoading());
  axios
    .get(
      "https://react-eval-backend.herokuapp.com/cities?_sort=population&_order=asc"
    )
    .then(({ data }) => {
      if (!data.length) {
        return;
      }
      dispatch(addCityData(data));
    })
    .catch((err) => {
      dispatch(addCityError());
      console.log(err);
    });
};

export const updateCityRequest =
  (cityName, Population, countryName, id) => async (dispatch) => {
    dispatch(addCityLoading());
    axios
      .patch(`https://react-eval-backend.herokuapp.com/cities/${id}`, {
        city: cityName,
        population: Population,
        country: countryName,
      })
      .then(({ data }) => {
        dispatch(addCityData(data));
        console.log(data);
      })
      .catch((err) => {
        dispatch(addCityError());
        console.log(err);
      });
  };
