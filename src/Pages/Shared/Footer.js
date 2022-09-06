import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className=''>

                <footer className=''>
                    <div className="footer p-8 text-white bg-[#091747]">

                        <div className='gird grid-cols-3 lg:grid-cols-3 mx-60 gap-10'>
                            <div>
                                <p className='text-2xl font-bold text-white'>Traveling via Delhi,</p>
                                <p className='text-2xl font-bold text-white'>Dehradun or Chandigarh?</p>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-white'>Rent while you transit </p>
                                <p className='text-2xl font-bold text-white'>& save even more!</p>
                            </div>
                            <div>
                                <div className='flex'>
                                <p className='text-xl font-bold text-white mt-2 mb-2 ml-6'>Save upto</p>
                                <p className='ml-2 text-3xl font-bold'>20%</p>
                                </div>
                                <button className='button1'>Know more</button>
                            </div>
                        </div>

                    </div>
                </footer>

            </div>
        </>
    );
};

export default Footer;