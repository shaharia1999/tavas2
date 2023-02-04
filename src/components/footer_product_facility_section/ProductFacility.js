import React, { Fragment } from 'react';

const ProductFacility = () => {
    return (
        <Fragment>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 p-10 mx-auto lg:max-w-7xl max-w-full lg:h-[400px] place-content-center'>
                <div className="lg:p-2 p-3">
                    <img
                        src="https://i.ibb.co/XD4yhwX/Group-11.webp"
                        className='mx-auto' alt="" />
                    <p className='lg:text-2xl text-xl pt-4 text-[#121D45] font-gilroybold text-center'>Free Home Delivery</p>
                    <p className='lg:text-center text-center font-gilroy text-md'>Free shipping is always included in all purchases.</p>
                </div>
                <div className="lg:p-2 p-3">
                    <img
                        src="https://i.ibb.co/kK91QpW/Group-10.webp"
                        className='mx-auto' alt="" />
                    <p className='lg:text-2xl text-xl pt-4 text-[#121D45] font-gilroybold text-center'>60 days free returns</p>
                    <p className='lg:text-center text-center font-gilroy text-md'>We always include a pre-printed return slip in all our deliveries.</p>
                </div>
                <div className="lg:p-2 p-3">
                    <img
                        src="https://i.ibb.co/rwMVbGN/Group-12.webp"
                        className='mx-auto' alt="" />
                    <p className='lg:text-2xl text-xl pt-4 text-[#121D45] font-gilroybold text-center'>Satisfaction Guarantee</p>
                    <p className='lg:text-center text-center font-gilroy text-md'>We do our best to ensure the highest quality in everything.</p>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductFacility;