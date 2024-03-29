import React, { Fragment, lazy, Suspense } from 'react';
import '../../assets/css/style.css'
import OtherNav from '../../components/menubar_without_transparent_background/OtherNav';


// import pages or components
const Sidebar = lazy(() => import('../../components/sidebar/Sidebar.js'));
const DisplayCenter = lazy(() => import('../../components/display_center/DisplayCenter.js'));
const Navbar = lazy(() => import('../../components/menubar_without_transparent_background/Navbar.js'));
const MobileMenu = lazy(() => import('../../components/mobile_menu/MobileMenu.js'));

const LotaraliProgram = () => {
    return (
        <Fragment>
            {/* <Navbar /> */}
            <OtherNav></OtherNav>
            <MobileMenu />
            <div className='flex mx-auto  h-full pt-20 lg:pt-0 lg:mt-10'>
                <div className='lg:w-1/6 w-2/6 pt-5'>
                    <Sidebar />
                </div>
                <div className='px-5 lg:px-0 md:px-0 lg:w-5/6 md:w-5/6'>
                    <h1 className='text-3xl font-bold py-10 text-center lg:text-left'>Loyalty Program</h1>
                    <p className='text-justify'>
                        Welcome to ILLIYEEN Loyalty Program!

                        Through this program, you will have the privilege to earn redeemable Loyalty Points on your every valued purchase. Loyalty Points earned can be redeemed for discounts on future purchases.
                    </p>
                    <p>There are two types of payment options:</p>
                    <ul>
                        <ol>Cash on Delivery</ol>
                        <ol>Online Payment</ol>
                    </ul>
                    <p>
                        <span className='font-bold'>Cash on delivery: </span>If the delivery location is inside Dhaka, our delivery agent will collect the cash after delivering the ordered product(s). For deliveries outside Dhaka, the customer has to pay the due amount to the courier service before collecting the product(s).
                        <br />
                        <span className='font-bold'>Online payment options: </span>You can make payments using Visa Card, MasterCard, American Express (AMEX), CityTouch, DBBL Nexus, BRAC Bank, bKash, Nagad, Rocket, Sure Cash, Fast Cash, Tap’n Pay, T-Cash, Upay, MyCash, IBBL MCash, Q-Cash, Bank Asia, IBBL, AB Bank, MTB, OK Wallet, Dmoney and UnionPay.
                    </p>
                    <p className='font-bold py-5'>Are there any International Payment methods?</p>
                    <p>Yes, you can pay using MasterCard, VISA and American Express (AMEX). Please note, you will be asked for proof of identity.</p>

                    <p className='font-bold py-5'>Are there any hidden charges?</p>
                    <p>Yes, you can pay using MasterCard, VISA and American Express (AMEX). Please note, you will be asked for proof of identity.</p>

                    <p className='font-bold py-5'>Will my information related to payment be secured?</p>
                    <p>Rest assured, we ensure the safety of your sensitive information. However, we do not retain card information to comply with regulatory guidelines. All information related to your card/bank account will be exclusively dealt with by the payment gateway. We will ensure that the 2FA (Two Factor Authentication) is verified for payment.</p>
                </div>
            </div>
            <div className='pt-10'>
                <DisplayCenter />
            </div>
        </Fragment>
    );
};

export default LotaraliProgram;