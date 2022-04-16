import React from 'react';
import logo from '../../images/logo2.png'

const Footer = () => {
    const today=new Date()
    const year=today.getFullYear()
    return (
        <div  className='mt-5 absolute w-full mb-0'>
            <div className='grid md:grid-cols-2  bg-zinc-800 h-[20vh] text-white '>
                <div className='flex items-center justify-center'>
                    <img src={logo} alt="" className='w-1/3' />
                </div>
                <div className='grid grid-cols-2 '>
                    <div className='flex items-center justify-center text-left'>
                        <div>
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center text-left'>
                       <div>
                       <p>Get help</p>
                        <p>Read FaQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                       </div>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 bg-zinc-800 text-white content-center pb-10 sm:grid-cols-1'>
                <div className=''>
                    <p><small>Copyright &copy; {year} Online food</small></p>
                </div>
                <div className='flex justify-center gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;