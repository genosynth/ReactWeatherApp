import React,{useState} from 'react'
import OtherDays from './OtherDays'

function InfoResults({results}) {
const [hours] = useState(()=>{
    let date = new Date()
    
        return date.getHours()
    
})



if (!results.weather){
        return 
    }
  return (


    <div className='info-results'>
        <div>
            <img src={`http://openweathermap.org/images/flags/${results.sys.country.toLowerCase()}.png`} style={{width:"50px"}}></img>
            <h2>{results.name}</h2>
            <img src ={`http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`}/>
            <h3>{results.weather[0].main}</h3>
            <h3>{results.main.temp}°</h3>
            <span>H:{results.main.temp_max}°</span> 
            <span>L:{results.main.temp_min}°</span>
        </div>


        <div className='days'>
       
            <OtherDays results={results} hours={hours}></OtherDays>

        
        </div>
        
    </div>
  )
}

export default InfoResults