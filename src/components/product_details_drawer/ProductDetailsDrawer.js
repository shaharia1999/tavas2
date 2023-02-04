import React, { Fragment } from 'react';

const ProductDetailsDrawer = ({ details }) => {
    return (
        <Fragment>
            <p className='pt-4 text-center font-semibold text-xl'>Product Details Information</p>
            <div className='p-4'>
                <p className='text-xl text-center'>Product ID: {details.id}</p>
                <p className='text-xl text-center text-[#121D45] font-bold'>{details.product_title}</p>
                <p className='pt-3'><span className='font-semibold text-[#121D45]'>Product Category: </span>{details.category}</p>
                <p className=''><span className='font-semibold text-[#121D45]'>Product Code: </span>{details.code}</p>
                <p className=''><span className='font-semibold text-[#121D45]'>Product Color: </span>{details.color}</p>
                <p className='text-xl pt-2 text-[#121D45] font-semibold'>Product Description:</p>
                <p className='text-justify pt-3'>{details.description}</p>
                <p className='text-xl pt-2 text-[#121D45] font-semibold'>Product Details:</p>
                {
                    details.details.map((otherDetail, key) => {
                        return <ul key={key}>
                            <li>{otherDetail}</li>
                        </ul>
                    })
                }
                <p className='text-xl pt-2 text-[#121D45] font-semibold'>Product Materials:</p>
                {
                    details.material.map((otherMaterial, key) => {
                        return <ul key={key}>
                            <li>{otherMaterial}</li>
                        </ul>
                    })
                }
            </div>
        </Fragment>
    );
};

export default ProductDetailsDrawer;