import React from 'react';
import quality from "../../Images/quality.png";
import delivery from "../../Images/delivery.png";
import pay from "../../Images/pay.png";

const WhySharePal = () => {
    return (
        <>

            <div className='card bg-base-300 mx-6'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>

                    <div className="bg-base-300">
                        <div className="card-body">
                            <div className='flex items-center justify-center'>
                                <img className='w-16 mr-6 ml-10' src={quality} alt="" />
                                <span className="text-center font-bold text-xl mb-2">Excellent Quality <p>Products</p>
                            </span>  
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="bg-base-300">
                        <div className="card-body">
                            <div className='flex items-center justify-center'>
                                <img className='w-16 mr-6 ml-10' src={delivery} alt="" />
                                <span className="text-center font-bold text-xl mb-2">Delivery Date & Return <p>Date is FREE!!</p>
                            </span>  </div>
                        </div>
                    </div>
                    <div className="bg-base-300">
                        <div className="card-body">
                            <div className='flex items-center justify-center'>
                                <img className='w-16 mr-6 ml-10' src={pay} alt="" />
                                <span className="text-center font-bold text-xl mb-2">Pay on Delivery
                            </span>  </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default WhySharePal;