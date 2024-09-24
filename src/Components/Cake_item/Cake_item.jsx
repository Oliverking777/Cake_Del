import React, { useContext } from 'react'
import './Cake_item.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Cake_item = ({id,name,price,description,image}) => {


    
    const {cart_items,add_to_cart,remove_from_cart} =useContext(Context); 

  return (
    <div className='food_item'>
        <div className='food_item_image_container'>
            <img  className='food_image' src={image} alt="" />
            {!cart_items[id]
                ?<img  className='add' onClick={()=>add_to_cart(id)} src={assets.add_icon_white} alt="" />
                :<div className='food_item_counter'>
                    <img onClick={()=>remove_from_cart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cart_items[id]}</p>
                    <img onClick={()=>add_to_cart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }


        </div>
        <div className="food_item_info">
            <div className="item_rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />


            </div>
            <p className="food_item_desc">{description}</p>
            <p className="food_item_price">{price} FCFA</p>
        </div>
    </div>
  )
}

export default Cake_item