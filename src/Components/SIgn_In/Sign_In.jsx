import React, { useState } from 'react'
import './Sign_In.css'
import { assets } from '../../assets/assets'

const Sign_In = ({ set_Show_Login }) => {
    const [curr_state, set_curr_state] = useState("Login")
    return (
        <div className='Sign_In'>
            <form className="sign_in">
                <div className="sign_in_pop_up_title">
                    <h2>{curr_state}</h2>
                    <img onClick={() => set_Show_Login(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="sign_in_popup_input">
                    {curr_state === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />


                </div>
                <button>{curr_state === "Sign UP" ? "Cretae Account" : "Login"}</button>
                <div className="sign_In_condition">
                    <input type="checkbox" required />
                    <p>Pour Continuer ,Vous Accepter les Thermes Et Conditions </p>

                </div>
                {curr_state === "Login"
                    ? <p>Create A New Account? <span onClick={() => set_curr_state("Sign Up")}>Click here</span></p>
                    : <p>Already Have An Account? <span onClick={() => set_curr_state("Login")}>Login Here</span></p>

                }
            </form>

        </div>
    )
}

export default Sign_In