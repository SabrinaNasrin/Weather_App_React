import React,{useState} from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5d665ffd594ca23d51c59056e6ff6d8f`
  const day = new Date();
  const  today = day.toDateString();
  const searchLocation = (Event) =>{
    if(Event.key==='Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })}
  }
  return (
    <div className="App">
      
      <div className="container">
      <div className="search">
        <input 
        value={location}
        onChange= {Event=>setLocation(Event.target.value)}
        onKeyDown = {searchLocation}
        placeholder='Enter Location'
        type="text" />
      </div>
        <div className="top">
          <div className="location">
            <p>{data.name}, {data.sys?.country}</p>
            
          </div>
          <div className="date">
            <p>{today}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°c</h1> : null}
            </div>          
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        {data.name!==undefined &&
        <div className="bottom">          
          <div className="feels">
            {data.main?<p className="bold">{Math.round(data.main.feels_like)}°c</p> : null}            
            <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main? <p className="bold">{data.main.humidity}%</p>:null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind? <p className="bold">{data.wind.speed}</p>:null}
              <p>Wind Speed</p>             
            </div>
        </div>
        }
      </div>  
    </div>
  );
}

export default App;
