import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/style.css"

const Information = () => {
    return (
        <Fragment>
            <div className="grid lg:grid-cols-3 store grid-cols-2 ">
                <div>
                    <Link to="/">
                        <img className='w-full h-[600px] ' src="https://i.ibb.co/xY02ZQ7/1.png" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img className='w-full h-[600px] ' src="https://i.ibb.co/hMGb59N/Outlets.png" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img className='w-full h-[600px] ' src="https://i.ibb.co/Gkx4yHj/2.png" alt="" />
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Information;