
import { useEffect, useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
function App() {
    const [region,setRegion]=useState(null)
    const [searchCountry,setSearchCountry]=useState('')

  const [data,setData]=useState([])
    useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region")
      .then(res=>res.json())
      .then(response=>setData(response))
    },[])
  return(
    <div>
      <Header data={data} setRegion={setRegion} />
      <Main data={data} region={region} setSearchCountry={setSearchCountry} searchCountry={searchCountry}/>
      <Footer/>
    </div>
  )
}

export default App
