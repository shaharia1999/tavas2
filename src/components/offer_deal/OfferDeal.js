import React, { Fragment } from 'react';

const OfferDeal = () => {
    return (
        <Fragment>
            <div className='grid grid-cols-2 py-5'>
                <div>
                    <img
                        className='h-96 mx-auto'
                        src="https://i.ibb.co/L5pZytW/download-4.webp" alt="" />
                </div>
                <div>
                    <div className=''>
                        <p className='text-[#121D45] text-5xl'>Get the best winter offer</p>
                        <p className='text-2xl'>Up to 21% Cashback</p>
                        <div className='absolute text-white font-bold text-xl uppercase pt-5'>
                            <a href="/">
                                <p className='bg-[#121D45] w-44 text-center rounded-lg'>
                                    Shop Now
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default OfferDeal;