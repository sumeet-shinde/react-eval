import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cityReducer } from "./CityDetails/reducer";
import { countryReducer } from "./CountryDetails/reducer";

const rootReducer = combineReducers({
  country: countryReducer,
  city: cityReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
