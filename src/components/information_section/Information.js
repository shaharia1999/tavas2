import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Information = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-3">
                <div>
                    <Link to="/">
                        <img className='w-full lg:h-[600px] sm:h-96' src="https://i.ibb.co/xY02ZQ7/1.png" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img className='w-full lg:h-[600px] sm:h-96' src="https://i.ibb.co/hMGb59N/Outlets.png" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img className='w-full lg:h-[600px] sm:h-96' src="https://i.ibb.co/Gkx4yHj/2.png" alt="" />
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Information;