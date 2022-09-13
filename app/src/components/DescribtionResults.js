import React from 'react'


function DescribtionResults({results}) {
    if (!results.weather){
        return 
    }
    
    const sunrise = new Date(results.sys.sunrise * 1000);
    let hours = sunrise.getHours();
    let minutes = "0" + sunrise.getMinutes();    
    const sunriseFormat = hours + ':' + minutes.substr(-2)

    const sunset = new Date(results.sys.sunset * 1000);
    hours = sunset.getHours();
    minutes = "0" + sunset.getMinutes();    
    const sunsetFormat = hours + ':' + minutes.substr(-2)


  return (
    <div className='describtion-results'>
        <div>
            <h5>SUNRISE</h5>
            <span>{sunriseFormat}</span>
        </div>
        <div>
            <h5>SUNSET</h5>
            <span>{sunsetFormat}</span>
        </div>
        
        <div>
            <h5>HUMIDITY</h5>
            <span>{results.main.humidity}%</span>
        </div>
        <div>
            <h5>WIND</h5>
            <span>{results.wind.speed} metres/second</span>
        </div>
        <div>
            <h5>WIND DIRECTION</h5>
            <span>{results.wind.deg} Degrees</span>
            
        </div>
        <div>
        
            <h5>FEELS LIKE</h5>
            <span>{results.main.feels_like}°</span>
        </div>
        <div>
            <h5>PRESSURE</h5>
            <span>{results.main.pressure}</span>
        </div>
        <div>
            <h5>VISIBILITY</h5>
            <span>{results.visibility} metres</span>
        </div>
       
        
    </div>
  )
}

export default DescribtionResults