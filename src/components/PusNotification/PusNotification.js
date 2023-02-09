import React from 'react';
import img from '../../assets/images/header_background_images/f1.jpg'
import "../../assets/css/style.css"

const PusNotification = () => {
    return (
        <div className='flex puseNotafication p-2'>
             <div className='w-16'>
                <img src={img}></img>
             </div>
             <div className='pl-3 ml-4'>
                <p>Mr Jon Just Purchase</p>
                <h3 className='text-2xl text-gray-900 font-semibold puseNotafication_semi'>Notafication X</h3>
                <div className='flex  '>
                    <p>1 munites Ago</p>
                    <p text-gray-900 font-semibold>Notafication X</p>
                </div>
             </div>
        </div>
    );
};

export default PusNotification;