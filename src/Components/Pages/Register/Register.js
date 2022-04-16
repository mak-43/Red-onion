import React from 'react';
import './Register.css'
import logo from '../../images/logo2.png'
const Register = () => {
    return (
        <div className='h-[64vh] '>

            <div className='flex justify-center items-center py-10'>
                <img className='w-1/3 ' src={logo} alt="" />
            </div>
            <div>
                <form className='flex flex-col w-1/2 mx-auto '>
                    <input type="text" name="text" id="" placeholder='Name' />
                    <input type="email" name="email" id=""placeholder='Email' required/>
                    <input type="password" name="password" id=""placeholder='Email'required />
                    <input type="password" name="confirmpassword" required placeholder='Confirm Password' />
                    <input className='text-stone-50 bg-red-600  py-2  rounded-xl hover:text-black ' type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default Register;