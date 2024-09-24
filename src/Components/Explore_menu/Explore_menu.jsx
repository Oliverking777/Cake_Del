import React from 'react'
import './Explore_menu.css'
import {menu_list} from '../../assets/assets'

const Explore_menu = ({category,setCategory}) => {
  return (
    <div>
        <div className='explore_menu' id='explore_menus'>
            <h1>Explorer Notre Menu</h1>
            <p className='ecplore_menu_text'>Choose from a diverse menu featuring a detectable array</p>
            <div className='explore_menu_list'>
                {menu_list.map((king,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===king.menu_name?"All":king.menu_name)} key={index} className='explore_menu_item_list'>
                           <img className={category===king.menu_name?"active":""} src={king.menu_image} alt="" />
                           <p>{king.menu_name}</p> 
                        </div>
                        
                    )
                })}
            </div>
            <hr />
        </div>

    </div>
  )
}

export default Explore_menu