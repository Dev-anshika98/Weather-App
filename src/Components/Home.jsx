
import axios from 'axios'
import React, { useEffect, useState } from "react";
import Search from '../assets/search2.png'
import Weather from '../assets/Weather2.png'
import Humidity from '../assets/Humidity.png'
import Wind from '../assets/wind.png'
import './style.css'
const Home =()=>{
    const[data, setData] = useState(
       {
        celcius: 10,
        name: 'London',
        humidity: 10,
        speed: 2,
       

       })

    
    const[name, setName] = useState('');
    const[error, setError] = useState('');
  
    const handleClick =() =>{
        if(name !==""){
            const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d76875f03d80f29cff30bd5b3313e8fd&units=metric`;
            axios.get(apiUrl)
            .then(res=>{
                setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed})
            })
            .catch(err => {
                if(err.reponse.status == 404){
                    setError("Invalid City Name")
                }else{
                    setError('');
                }

                console.log(err)
            });

        }
    }
    return(
        <div className="box">
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder=" Enter city name" onChange={e=> setName(e.target.value)} />
                    <button><img src={Search} onClick={handleClick} alt="" /></button>
                </div>
                <div className="error">
                    <p>{error}</p>
                </div>
                <div className="winfo">
                    <img src={Weather} alt="" className="icon"/>
                    <h1>{Math.round(data.celcius)}°c</h1>
                    <h2>{data.name}</h2>
                    <div className="details">
                        <div className="col">
                            <img src={Humidity} alt="" />
                            <div className="humidity">
                                <p>{Math.round(data.humidity)}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={Wind} alt="" />
                            <div className="wind">
                                <p>{Math.round(data.speed)} km/hr</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}
export default Home;