import React,{useState} from 'react'

function OtherDays({results,hours}) {
    const [array] = useState(()=>{
        let array = []
        for (let i = 0; i<=24; i++){
            let temp = hours + i
            if (temp>23){
                
                if((hours+i-24)<10){
                    array.push("0"+(hours+i-24))
                }

                if ((hours+i-24)>9){
                    array.push(hours+i-24)
                }
                 
            }

            if (temp<24){
                array.push(hours+i)
            }
            
    
        }
    
        return array
    })

    return (
        array.map((el)=>{
            return (
            <div key={el}>
            <h4>{el}:00</h4>
            <img src ={`http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`}/>
            <h4>{results.weather[0].main}</h4>
        </div>
            )
        })
      )
}

export default OtherDays