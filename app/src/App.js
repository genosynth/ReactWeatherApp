import './App.css';
import Header from './components/Header'
import InfoResults from './components/InfoResults'
import DescribtionResults from './components/DescribtionResults'
import DaysForecast from './components/DaysForecast'
import React, {useState} from 'react';

function App() {

  const api = process.env.REACT_APP_API_KEY;

  const [results, updateResults] = useState(false)
  const [message, updateMessage] = useState("")



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

if ((!results) || (results.cod==404) || (results.cod==400) ){

  return (

    <div className='App'>
    
      <Header makeAPICall={makeAPICall}></Header>   
      <div className="instructions">
      <span>To use this weather forecast application correctly you are to enter the name of the country or city followed by a comma 
      and the country's code initial letter to get exact matches. </span>
      <span>Example - "Malta" will not give the same results as "Matla,MT" as Malta is also a city in America and the API
         Open Weather Map gives the default value of the American city.</span>
         <span>You should look out for the flags to see if it matches what you intended to search for.</span>
      <h2>{message}</h2>
          
  
  </div>

    </div>

  )

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
