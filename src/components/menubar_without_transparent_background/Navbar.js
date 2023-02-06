import React, { Fragment, lazy } from 'react';
import siteLogoDark from '../../assets/images/logo/T Black.png';
import { Link } from 'react-router-dom';

// components or pages
import TopBarMenu from'../../pages/home_page/TopBarMenu.js';
const RightNavbarItems = lazy(() => import('../../components/right_navbar_items/RightNavbarItems.js'));

const Navbar = () => {
    return (
        <Fragment>
            <div className='header-section h-32'>
                <div className='absolute top-12'>
                    {/* Top bar container */}
                    <TopBarMenu />
                </div>
                <Link to="/">
                    <img src={siteLogoDark}
                        alt="website logo"
                        className='absolute w-40 left-2/4 -translate-x-2/4 h-auto top-0'
                    />
                </Link>
                <RightNavbarItems />
            </div>
        </Fragment>
    );
};

export default Navbar;