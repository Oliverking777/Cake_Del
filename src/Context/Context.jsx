import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const Context = createContext(null)

const contextProvider=(props) =>{

    const [cart_items,set_cart_items]=useState({});

    const add_to_cart=(itemId) =>{
        if(!cart_items[itemId]){
            set_cart_items((prev)=>({...prev,[itemId]:1}))
        }
        else{
            set_cart_items((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const remove_from_cart=(itemId)=>{
        set_cart_items((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cart_items);
    },[cart_items])

    


    const ContextValue={
        food_list,
        cart_items,
        set_cart_items,
        add_to_cart,
        remove_from_cart
    }

    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )

}
export default contextProvider