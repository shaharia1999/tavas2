import React from 'react';
import { useState } from 'react';
import { lazy } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// components or pages
const Navbar = lazy(() => import('../../components/menubar_without_transparent_background/Navbar.js'));
const MobileMenu = lazy(() => import('../../components/mobile_menu/MobileMenu.js'));

const Cart = () => {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1); // handle increment quantity    
    const decrementCounter = () => {  // handle decrement quantity
        if (counter > 1) {
            setCounter(counter - 1);
        }
        else {
            setCounter(1)
        }
    };

    return (
        <Fragment>
            <Navbar />
            <MobileMenu />
            <h2 className='text-center text-[#121D45] text-xl lg:text-3xl mt-20'>Your Cart Items</h2>
            <div className="px-1">
                <table class="table-auto w-full lg:w-4/6 h-auto text-center mx-auto">
                    <thead>
                        <tr className='h-[70px] font-gilroy lg:font-gilroybold'>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>QTY</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='h-[70px]'>
                            <td><img src="https://i.ibb.co/ftwVp9H/download-7.webp" className='h-14 mx-auto' alt="primage" /></td>
                            <td>PREMIUM Panjabi</td>
                            <td>1800</td>
                            <td>
                                <button onClick={decrementCounter} className="px-2">-</button>
                                <input type="text" className="w-10 lg:w-16 border-2 border-[#121D45] rounded-lg text-center" placeholder={counter} />
                                <button onClick={incrementCounter} className="px-2">+</button>
                            </td>
                            <td>4900</td>
                            <td className='font-gilroybold text-red-600'>
                                <Link>
                                    X
                                </Link>
                            </td>
                        </tr>
                        <tr className='h-[70px]'>
                            <td><img src="https://i.ibb.co/ftwVp9H/download-7.webp" className='h-14 mx-auto' alt="primage" /></td>
                            <td>PREMIUM Panjabi</td>
                            <td>1800</td>
                            <td>
                                <button onClick={decrementCounter} className="px-2">-</button>
                                <input type="text" className="w-10 lg:w-16 border-2 border-[#121D45] rounded-lg text-center" placeholder={counter} />
                                <button onClick={incrementCounter} className="px-2">+</button>
                            </td>
                            <td>4900</td>
                            <td className='font-gilroybold text-red-600'>
                                <Link>
                                    X
                                </Link>
                            </td>
                        </tr>
                        <tr className='h-[70px]'>
                            <td><img src="https://i.ibb.co/ftwVp9H/download-7.webp" className='h-14 mx-auto' alt="primage" /></td>
                            <td>PREMIUM Panjabi</td>
                            <td>1800</td>
                            <td>
                                <button onClick={decrementCounter} className="px-2">-</button>
                                <input type="text" className="w-10 lg:w-16 border-2 border-[#121D45] rounded-lg text-center" placeholder={counter} />
                                <button onClick={incrementCounter} className="px-2">+</button>
                            </td>
                            <td>4900</td>
                            <td className='font-gilroybold text-red-600'>
                                <Link>
                                    X
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-center py-5'>
                <Link to="/checkout">
                    <button type="" className='border w-48 lg:w-60 h-10 bg-[#121D45] text-white font-gilroy rounded-lg'>Proceed to Checkout</button>
                </Link>
            </div>
        </Fragment >
    );
};

export default Cart;