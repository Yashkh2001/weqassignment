import React,{useState} from 'react'
import Drone from '../assets/drone1.jpg'
import Drone1 from '../assets/drone2.jpg'

const Hero = () => {

    const toggleNav=()=>{
        
       
        const navlinks=document.querySelector(".nav-content")
        navlinks.classList.toggle("nav-active")
        const burger=document.querySelector('.burger')
        burger.classList.toggle('toggle')
}

const carousel=()=>{
    const slide=document.getElementById("slider")
    slide.style.transform="translateX(0px)"

    
}

const carousel1=()=>{
    const slide=document.getElementById("slider")
    slide.style.transform="translateX(-50%)"

    
}



   
  
   


    return (
        <div className="hero">
            <div className="hero-content">
                <div className="logo">
                    <h3 style={{color:"#fff",fontWeight:"1000"}}>SQUARE</h3>

                    <div id="burger" className="burger" onClick={toggleNav}>
                        <div className="line1" ></div>
                        <div className="line2" ></div>
                        <div className="line3" ></div>
                    </div>
                </div>
                

                <div className="content">
                    <h2>The new GPS by drones - <br/>VISUAL POSITIONING SYSTEM</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum assumenda mollitia ipsum, soluta reprehenderit aliquid amet reiciendis amet consectetu.
                    </p>

                </div>

            </div>
            <div id="nav-content" className='nav-content'>
                <div className="nav1" >
                    <a href='/'>Overview</a>
                    <a href='/'>Demos</a>
                    <a href='/'>Pages</a>
                    <a href='/'>Docs</a>
                    <a href='/'>BUY NOW</a>
                </div>


                <div className="nav-img">
                    <div id="slider">
                        <img src={Drone} alt="" />
                        <img src={Drone1} alt="" />
                    </div>
                </div>
                <div className="icons">
                    <i onClick={carousel}  class="fas fa-arrow-left fa-2x"></i>
                    <i onClick={carousel1} class="fas fa-arrow-right fa-2x"></i>

                </div>


            </div>
            
            
        </div>
    )
}

export default Hero

