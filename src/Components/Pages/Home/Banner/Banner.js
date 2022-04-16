import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='h-[20vh]'>
                <h1 className='text-4xl py-5 font-semibold'>Best Food Waiting For Your Belly</h1>
                <div className='relative inline-block  '>
                    <input className='w-96 px-5 py-3 rounded-3xl ml-5 text-stone-50 ' type="search" name="" id="" placeholder='Search food items' />
                    <div>
                        <button className=' bg-red-600 px-5 py-3  rounded-3xl ml-5 text-stone-50 absolute  top-0 right-0'>Search</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;