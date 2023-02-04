import React, { Fragment } from 'react';

const DeliveryPaymentDrawer = () => {
    return (
        <Fragment>
            <p className='pt-4 text-center font-semibold text-xl'>Delivery and Payment</p>
            <p className='text-justify p-4'>Customers can avail themselves of nationwide and worldwide shipping options when ordering online. We process one shipping address per order. If you would like to ship to a different address, you may consider placing separate orders and making payments for them separately. The shipping date depends on your preferred delivery location and delivery type. Please note that for locations Outside Dhaka, you need to collect the delivery items from your nearest courier branch.
            </p>
            <p className='text-justify p-4'>To begin purchasing from the site (www.tavaas.com) or platform, you may be required to register using a valid phone number and password. It is your sole responsibility to keep such information/log-in details secure. We shall not be held responsible if such information/log-in details are provided to a third party by the customer or if any third party receives the same due to the negligence of the customer and for any loss incurred as a result of the above-mentioned incidents (unauthorized access to data).</p>
        </Fragment>
    );
};

export default DeliveryPaymentDrawer;