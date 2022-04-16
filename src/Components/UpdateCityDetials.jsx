import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCityRequest } from "../Redux/CityDetails/action";
import { getCountryRequest } from "../Redux/CountryDetails/action";
import { store } from "../Redux/store";
import Button from '@mui/material/Button';

export const UpdateCityDetials = () => {
  const [countryName, setCountryName] = useState("");
  const [Population, setPopulation] = useState("");
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();
  const {countries} = useSelector((store) => store.country);
  const {cities} = useSelector((store) => store.city);
  const navigate = useNavigate();
  const ID = JSON.parse(localStorage.getItem("ID"));

  useEffect(() => {
    dispatch(getCountryRequest());
    console.log(countries);
  }, [])

  const handleSubmit = () => {
    dispatch(updateCityRequest(cityName, Population, countryName, ID));
    console.log(cities);
  }
  
  return <>
    <h2>Update City Details</h2>
    <Button variant="contained" onClick={() => {
      navigate("/");
    }}>Home</Button><Button variant="contained" onClick={() => {
      navigate("/add-country");
    }}>Add Country</Button><br /><br />
    <label>Select your Country Name: 
      <select name="" id="" onChange={(e) => setCountryName(e.target.value)}>
        <option value=""></option>
        {countries.map((e, id) => {
          return <option key = {id} value={e.country}>{e.country}</option>
        })}
      </select>
    </label>
    <br /><br />
    <input type="text" placeholder="Enter City Name" onChange={(e) => setCityName(e.target.value)}/>
    <br /><br />
    <input type="text" placeholder="Enter Population" onChange={(e) => setPopulation(e.target.value)}/>
    <br /><br />
    <Button variant="contained" disabled={!countryName && !Population && !cityName} onClick={handleSubmit} >Submit</Button>
  </>
}