import React, { useContext } from 'react'
import './Cake_display.css'
import { Context } from '../../Context/Context'
import Cake_item from '../Cake_item/Cake_item'


const Cake_display = ({category}) => {

    const {food_list} = useContext(Context)

  return (
    <div className='food_display' id='food_display'>
        <h2>Meilleure Gateau Pour Vous</h2>
        <div className="food_display_list">
            {food_list.map((king,index) =>{
                if(category==="All" || category===king.category){
                    return <Cake_item key={index} id={king._id} name={king.name} price={king.price} description={king.description} image={king.image} object={king.count} />

                }
               
            }

            )}
        </div>
    </div>
  )
}

export default Cake_display