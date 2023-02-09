import React, { Fragment } from 'react';
import signatureLogo from '../../assets/images/signature_logo/Tavaas.png'

const SignatureClub = () => {
    return ( 
        <Fragment>
            <div className="bg-[#D9D9D9] p-6 h-[100vh] relative">
                <div className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'>
                    <img className='mx-auto h-[100px] w-[165px]' src={signatureLogo} alt="" />
                    <div className='lg:w-[860px] w-[320px] mx-auto'>
                        <p className='text-center lg:text-5xl text-[28px] pb-3 font-gilroybold'>Signature Club</p>
                        <p className='text-center sm:text-sm font-medium font-gilroy lg:text-lg'>Welcome to the Signature Club,where we treat you to even more of the things that make Tavaas what it is your Signature experience.Our new customer club will reward you with extended service, unique benefits, and special access.</p>
                    </div>
                    <div className='text-center py-5'>
                        <button className='bg-[#121D45] text-white left-2/4 w-36 h-10'>Learn More</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SignatureClub;