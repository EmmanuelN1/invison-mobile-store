import React from 'react';
import CartItem from './CartItem';

export default function CartList ({value}){
    const {cart} = value;
    return (
        <div className="container-fluid"> {/* this property is used so that all spaces can be taken */}
             {cart.map ( item => {
                 return <CartItem key ={item.id} item={item} value={value} />
             })}    
        </div>
    )
}

