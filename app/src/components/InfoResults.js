import React from 'react'

function InfoResults({results}) {

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
            <div>
                <h4>Now</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>15</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>16</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>17</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>18</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>19</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>20</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>21</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>22</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>23</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>00</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>01</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>02</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>03</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>04</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>05</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>06</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>07</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>08</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>09</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>10</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>11</h4>
                <h4>Image</h4>
                <h4>33°</h4>
            </div>

            <div>
                <h4>12</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>

            <div>
                <h4>13</h4>
                <h4>Image</h4>
                <h4>32°</h4>
            </div>                     
        
        </div>
        
    </div>
  )
}

export default InfoResults