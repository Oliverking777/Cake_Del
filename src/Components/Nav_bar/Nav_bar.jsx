import React, { useState } from 'react'
import './Nav_bar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Nav_bar = ({set_Show_Login}) => {

   const [Menu,setMenu] =useState("Acceuil");

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className='Nav_menu'>
            <Link to='/' onClick={()=>setMenu("Acceuil")} className={Menu==="Acceuil"?"active":""}>Acceuil</Link>
            <a href='#explore_menus' onClick={()=>setMenu("Menu")} className={Menu==="Menu"?"active":""}>Menu</a>
            <a href='#foters' onClick={()=>setMenu("Contacter_nous")} className={Menu==="Contacter_nous"?"active":""}>Contater Nous</a >
        </ul>

        <div className='navbar_right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar_search'>
                <Link to='/My_Cart'><img src={assets.basket_icon} alt="" /></Link>
                
                <div className='dot'></div>
                
            </div>
            <button onClick={()=>set_Show_Login(true)}>Cree Un Compte</button>
        </div>
    </div>

  )
}

export default Nav_bar