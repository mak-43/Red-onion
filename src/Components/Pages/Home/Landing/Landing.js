import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AcitveLink from '../../../Shared/ActiveLink/ActiveLink';
import Artcle from '../Article/Artcle';
import Banner from '../Banner/Banner';
import BreakFast from '../Main/BreakFast/BreakFast';
import Dinner from '../Main/Dinner/Dinner';
import Lunch from '../Main/Lunch/Lunch';


const Landing = () => {
    return (
        <div>
            
            <Banner/>
            <div className='flex justify-center gap-8 py-5 text-xl font-semibold'>
                <AcitveLink to='breakfast'>Breakfast</AcitveLink>
                <AcitveLink to='lunch'>Lunch</AcitveLink>
                <AcitveLink to='dinner'>Dinner</AcitveLink>
            </div>
            <div className='py-20 '>
                <Outlet></Outlet>
                <button className=' mt-8 px-5 py-3 bg-gray-300 text-white rounded-3xl hover:text-black'>Checkout Your Food</button>
            </div>
            
            <Artcle/>
        </div>
    );
};

export default Landing;