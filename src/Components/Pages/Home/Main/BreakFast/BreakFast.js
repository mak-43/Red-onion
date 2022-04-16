import React, { useEffect, useState } from 'react';
import Cart from '../../../../Shared/Cart/Cart';

const BreakFast = () => {
    const [brkfast,setBrkfast]=useState([])
    useEffect(()=>{
        fetch('Breakfast.json')
        .then(res=>res.json())
        .then(data=>setBrkfast(data))
    },[])

    return (
        <div className='flex justify-center items-center '>
           
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 '>
           {
                brkfast.map(brk=><Cart
                key={brk.title}
                brk={brk}
                
                
                ></Cart>)
            }
           </div>
            
        </div>
    );
};

export default BreakFast;