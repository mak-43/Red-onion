import React from 'react';
import './Cart.css'
const Cart = ({ brk }) => {
    const { img, title, description, price } = brk
    return (
        <div className='cart flex flex-col justify-center items-center p-2'>
            <div className=''>
                <img className='h-48' src={img} alt="" />
            </div>
            <div className='my-8'>
                <p className='text-lg font-medium'>{title}</p>
                <p>{description}</p>
                <p className='text-2xl font-bold'>{price}</p>
            </div>
        </div>
    );
};

export default Cart;