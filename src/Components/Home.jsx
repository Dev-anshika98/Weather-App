import React, { useState } from "react";
import Search from '../assets/search2.png'
import Weather from '../assets/Weather2.png'
import Humidity from '../assets/Humidity.png'
import Wind from '../assets/wind.png'
import './style.css'
const Home =()=>{
    const[data, setData] = useState(
        
    )
    return(
        <div className="box">
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder=" Enter city name" />
                    <button><img src={Search} alt="" /></button>
                </div>
                <div className="winfo">
                    <img src={Weather} alt="" className="icon"/>
                    <h1>22°c</h1>
                    <h2>London</h2>
                    <div className="details">
                        <div className="col">
                            <img src={Humidity} alt="" />
                            <div className="humidity">
                                <p>20%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={Wind} alt="" />
                            <div className="wind">
                                <p>2 km/hr</p>
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