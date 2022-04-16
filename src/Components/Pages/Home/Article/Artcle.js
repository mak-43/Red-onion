import React from 'react';
import img1 from '../../../images/img1.png'
import img2 from '../../../images/img2.png'
import img3 from '../../../images/img3.png'
import icon1 from '../../../images/icons/fdelevery.png'
import icon2 from '../../../images/icons/good.png'
import icon3 from '../../../images/icons/home.png'

const Artcle = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='w-2/4 text-left'>
                <h1 className='text-4xl text-left py-5'>Why you choose us</h1>
                <p className='py-2'>Barton waited twenty always rapair in within we do.An delighted offending curiosity my is dahswoods at. Boy properous increasing srrounded</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className=' py-5'>
                    <div className=''>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <div className='flex items-center ml-5 my-5'>
                            <img src={icon1} alt="" />
                            <p className='text-lg font-semibold ml-3'>Fast Deliery</p>
                        </div>
                        <div className='flex flex-col text-left ml-16'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sit magni tempgiat vitae unde incim consequuntur provident</p>
                            <div className='flex  gap-4 py-2 '>
                                <a href="#" className='text-blue-600'> see more</a>
                                <p>👍</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' py-5'>
                    <div className=''>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <div className='flex items-center ml-5 my-5'>
                            <img src={icon2} alt="" />
                            <p className='text-lg font-semibold ml-3'>Fast Deliery</p>
                        </div>
                        <div className='flex flex-col text-left ml-16'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sit magni tempgiat vitae unde incim consequuntur provident</p>
                            <div className='flex  gap-4 py-2 '>
                                <a href="#" className='text-blue-600'> see more</a>
                                <p>👍</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' py-5'>
                    <div className=''>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <div className='flex items-center ml-5 my-5'>
                            <img src={icon3} alt="" />
                            <p className='text-lg font-semibold ml-3'>Fast Deliery</p>
                        </div>
                        <div className='flex flex-col text-left ml-16'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sit magni tempgiat vitae unde incim consequuntur provident</p>
                            <div className='flex  gap-4 py-2 '>
                                <a href="#" className='text-blue-600'> see more</a>
                                <p>👍</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artcle;