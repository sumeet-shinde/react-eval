import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCountryRequest } from "../Redux/CountryDetails/action";
import Button from '@mui/material/Button';

export const AddCountry = () => {
  const [countryName, setCountryName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(addCountryRequest(countryName));
  }

  return <>
    <h2>Add Country</h2>
    <Button variant="contained" onClick={() => {
      navigate("/");
    }}>Home</Button><Button variant="contained" onClick={() => {
      navigate("/add-city");
    }}>Add City</Button><br /><br />
    <input type="text" placeholder="Enter Country Name" onChange={(e) => setCountryName(e.target.value)}/>
    <br /><br />
    <Button variant="contained" disabled={!countryName} onClick={handleSubmit}>Submit</Button>
  </>
}