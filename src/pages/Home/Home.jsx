import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Explore_menu from '../../Components/Explore_menu/Explore_menu'
import Cake_display from '../../Components/Food_display/Cake_display'





const Home = () => {

    const [category,setCategory] =useState("All");

  return (
    <div>
        <header>
            <Header/>
            <Explore_menu category={category} setCategory={setCategory}/>
            <Cake_display category={category}/>
            
            
            
            
            
            
            
            

        </header>

    </div>
  )
}

export default Home