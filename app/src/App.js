import './App.css';
import Header from './components/Header'
import InfoResults from './components/InfoResults'
import DescribtionResults from './components/DescribtionResults'
import DaysForecast from './components/DaysForecast'
import React, {useState} from 'react';

function App() {

  const api = process.env.REACT_APP_API_KEY;

  const [results, updateResults] = useState( async ()=>{
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=malta&units=metric&APPID=${api}`, {mode: 'cors'})
      const getWeather = await response.json();
    
      return getWeather
      
  } catch(error){
              
      console.log(error)
  }
  })



  async function makeAPICall(location){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${api}`, {mode: 'cors'})
        const getWeather = await response.json();
        console.log(getWeather)
        updateResults(getWeather)
        
    } catch(error){
                
        console.log("fuck")
    }
}
  return (
    <div className="App">
      <Header makeAPICall={makeAPICall}></Header>   
      <InfoResults results={results}></InfoResults> 
      <DescribtionResults results={results}></DescribtionResults>
      {/*<DaysForecast></DaysForecast> this*/}
    
    </div>
  );
}

export default App;
