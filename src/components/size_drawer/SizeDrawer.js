import React, { Fragment } from 'react';

const SizeDrawer = ({ size }) => {
    return (
        <Fragment>
            <p className='pt-4 text-center font-semibold text-xl'>Size Guide</p>
            <div className='text-center w-full'>
                {
                    size.map((clothSize) => (
                        <div className='inline-block'>
                            <button type="" className='mx-2 mt-5 border rounded-lg text-black py-2 w-16 uppercase'>{clothSize}</button>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    );
};

export default SizeDrawer;