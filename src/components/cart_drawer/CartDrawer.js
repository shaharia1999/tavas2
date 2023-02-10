import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    return (
        <Fragment>
            <div>
                <h2 className='text-center text-2xl py-4 text-red-400'>Shopping Bag { }</h2>
                <div className='text-center'>
                    <Link to="/newCard">
                        <button type="" className='border w-60 h-10 bg-[#121D45] text-white font-gilroy rounded-lg'>Go to Cart</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default CartDrawer;