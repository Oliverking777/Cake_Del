import React, { useContext } from 'react'
import './My_Cart.css'
import { Context } from '../../Context/Context'
import { food_list } from '../../assets/assets'

const My_Cart = () => {
    const {cart_items,food_list,remove_from_cart} = useContext(Context)
  return (
    <div className='my_cart'>
        <div className="cart_items">
            <div className="cart_items_title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />

            {food_list.map((king,index)=>{
                if(cart_items[king.id]>0){
                    return(
                        <div className="cart_items_title">
                            <p>{king.namez}</p>
                        </div>
                    )
                }
            })}
        </div>
    </div>
  )
}

export default My_Cart