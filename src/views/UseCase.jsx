import React from 'react'
import Drone from '../assets/drone1.jpg'
import Drone1 from '../assets/drone2.jpg'

const UseCase = () => {
    return (
        <div className='usecase'>
            <div className="images">
                <img src={Drone} alt="" />
                <img src={Drone1} alt="" />

            </div>
            <div className="points">
                <h3>How to use Visual Positioning <br /> Systems Safely</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellendus excepturi quisquam modi doloremque eos quaerat! Obcaecati, voluptas. Atque, ad!</p>

                <ul>
                    <li> Not to flight above monochrome surfaces with VPS on</li>
                    <li> Deactivate VPS while flying above water</li>
                    <li> Not to fly over moving objects while VPS on</li>
                    <li> Not to flight above monochrome surfaces with VPS on</li>
                    <li> Deactivate VPS while flying above water</li>
                    <li> Not to fly over moving objects while VPS on</li>
                    <li> Not to fly over moving objects while VPS on</li>
                </ul>
            </div>
            
        </div>
    )
}

export default UseCase
