import './App.css';
import Header from './components/Header'
import InfoResults from './components/InfoResults'
import DescribtionResults from './components/DescribtionResults'
import DaysForecast from './components/DaysForecast'


function App() {

  const api = process.env.REACT_APP_API_KEY;

  async function makeAPICall(location){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${api}`, {mode: 'cors'})
        const getWeather = await response.json();
        console.log(getWeather)
        
    } catch(error){
                
        console.log("fuck")
    }
}
  return (
    <div className="App">
      <Header makeAPICall={makeAPICall}></Header>   
      <InfoResults></InfoResults> 
      <DescribtionResults></DescribtionResults>
      <DaysForecast></DaysForecast>
    
    </div>
  );
}

export default App;
