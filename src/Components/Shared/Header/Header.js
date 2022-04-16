import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import AcitveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='flex justify-between mx-20 my-4 '>
            <div className=''>
                <img className=' h-10 ' src={logo} alt="" />
            </div>
            <div className='flex items-center gap-3'>
                <AcitveLink to='/order'><p>👍</p></AcitveLink>
                <AcitveLink to='/login'>Login</AcitveLink>
                <Link className='text-stone-50 bg-red-600 px-5 py-2  rounded-3xl ml-5' to='/register'>Sign up</Link>
            </div>
        </div>
    );
};

export default Header;