import React from 'react'
import './Foter.css'
import { assets } from '../../assets/assets'

const Foter = () => {
    return (
        <div className='foter' id='foters'>
            <div className="foter_content">
                <div className="foter_content_left">
                    <img src={assets.logo} alt="" />
                    <p>Loren Ipsum is simply a typing company in which you develope your typing skills</p>
                    <div className="foter_social_icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="foter_content_center">
                    <h2>ABO DEVELOPMENT</h2>
                    <ul>
                        <li>Acceuil</li>
                        <li>A Propos de Information Sur Nous</li>
                        <li>Livraison</li>
                        <li>Confidentiality</li>
                    </ul>

                </div>
                <div className="foter_content_rigth">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+237 672-26-22-64</li>
                        <li>oliverking.gmail.com</li>

                    </ul>

                </div>
            </div>
            <hr />
            <p className='foter_copyright'>Copyright 2024 @ Oliver.com - All Rights Reserved</p>

        </div>
    )
}

export default Foter