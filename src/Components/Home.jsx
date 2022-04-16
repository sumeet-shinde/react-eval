import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { deleteCityRequest, filterDataRequest, getCityRequest, sortCityAscRequest, sortCityDescRequest } from "../Redux/CityDetails/action";
import { getCountryRequest } from "../Redux/CountryDetails/action";
import Button from '@mui/material/Button';

export const Home = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((store) => store.city);
  const { countries } = useSelector((store) => store.country);
  const navigate = useNavigate();

  useEffect(() => {
    handleData();
  }, []);

  const handleData = () => {
    dispatch(getCityRequest());
    console.log(cities);
    dispatch(getCountryRequest());
  }

  if (!cities.length || !countries.length) {
    return <div>Loading</div>
  }

  return <>
    <h2>Home</h2>
    <Button variant="contained" onClick={() => {
      navigate("/add-country");
    }}>Add Country</Button><Button variant="contained" onClick={() => {
      navigate("/add-city");
    }}>Add City</Button><br /><br />
    Filter by country:
    {countries.map((e, id) => {
      return <Button variant="contained" onClick={() => {
        dispatch(filterDataRequest(e.country))
      }} key={id} value={e.country}>{e.country}</Button>
    })}<br /><br />
    Sort By Population:
    <Button variant="contained" onClick={() => {
      dispatch(sortCityAscRequest());
    }}>Asc</Button>
    <Button variant="contained" onClick={() => {
      dispatch(sortCityDescRequest());
    }}>Desc</Button>
    <br /><br />
    <table style={{ margin: "auto" }}>
      <thead>
        <tr>
          <th>id</th>
          <th>Country</th>
          <th>City</th>
          <th>Population</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {cities.map((e, id) => {
          return <tr key={id}>
            <td>{e.id}</td>
            <td>{e.country}</td>
            <td>{e.city}</td>
            <td>{e.population}</td>
            <td><Button variant="outlined" onClick={() => {
              const ID = e.id;
              localStorage.setItem("ID", JSON.stringify(ID));
              navigate("/update-city");
            }}>Edit</Button></td>
            <td><Button variant="outlined" onClick={() => {
              dispatch(deleteCityRequest(e.id));
              handleData();
            }}>Delete</Button></td>
          </tr>
        })}
      </tbody>
    </table>
  </>
}