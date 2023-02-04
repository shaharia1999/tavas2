import React, { Fragment } from 'react';
import '../../assets/css/style.css';

const BestCategory = () => {
    return (
        <Fragment>
            <div className='grid grid-cols-2'>
                <div className='relative'>
                    <img
                        className='w-full best-category-image'
                        src="https://i.ibb.co/w4XbC57/groom-collection-panjabi-14.webp" alt="" />
                    <div className='absolute top-3/4 left-2/4 text-white font-bold text-2xl uppercase'>
                        <a href="/">
                            <p className='bg-[#121D45] w-44 text-center rounded-lg'>
                                Shop Now
                            </p>
                        </a>
                    </div>
                </div>
                <div className='relative'>
                    <img
                        className='w-full best-category-image'
                        src="https://i.ibb.co/r7pg3MQ/groom-collection-panjabi-08.webp" alt="" />
                    <div className='absolute top-3/4 left-2/4 text-white font-bold text-2xl uppercase'>
                        <a href="/">
                            <p className='bg-[#121D45] w-44 text-center rounded-lg'>
                                Shop Now
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BestCategory;