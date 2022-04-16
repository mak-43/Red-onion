import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    return (
        <div className='text-lime-700'>
           

           <button onClick={()=>navigate('/register')}>SignUp?</button>
        </div>
    );
};

export default Login;