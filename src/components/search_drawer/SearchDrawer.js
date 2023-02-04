import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SearchDrawer = () => {
    return (
        <Fragment>
            <section className='grid place-items-center h-screen'>
                <div className=''>
                    <form className='w-48'>
                        <input
                            type=""
                            name=""
                            value=""
                            placeholder='   Search...'
                            className='border border-black-600 h-10'
                        />
                        <br />
                        <button type="" className='bg-[#121D45] font-gilroy text-white mt-3 w-48 h-8'>SEARCH</button>
                        <Link to="/my-account">
                            <button type="" className='bg-[#121D45] font-gilroy text-white mt-3 w-48 h-8'>MY ACCOUNT</button>
                        </Link>
                        <div className='pt-4'>
                            <p className='font-semibold uppercase'>suggested searches:</p>
                            <p className='text-center'>You can search for product codes - 222514 or 225124
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default SearchDrawer;