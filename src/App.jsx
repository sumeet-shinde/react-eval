import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AddCityDetails } from './Components/AddCityDetails'
import { AddCountry } from './Components/AddCountry'
import { Home } from './Components/Home'
import { UpdateCityDetials } from './Components/UpdateCityDetials'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/add-country"} element={<AddCountry/>}/>
        <Route path={"/add-city"} element={<AddCityDetails/>}/>
        <Route path={"/update-city"} element={<UpdateCityDetials/>}/>
      </Routes>
    </div>
  )
}

export default App
