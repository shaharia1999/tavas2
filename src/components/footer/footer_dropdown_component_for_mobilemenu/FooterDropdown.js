import React, { Fragment } from 'react';

const FooterDropdown = () => {
    return (
        <Fragment>
            <div className="flex flex-col w-72 gap-6">
                <select variant="standard" label="Select Version">
                    <option>Company</option>
                    <option>About Us</option>
                    <option>Contact Us</option>
                    <option>Intellectual Property</option>
                </select>
            </div>
            <div className="flex flex-col w-72 gap-6 pt-3">
                <select variant="standard" label="Select Version">
                    <option>Information</option>
                    <option>Exchange & Return</option>
                    <option>Size Guide</option>
                    <option>Loyalty Program</option>
                    <option>Display Center</option>
                </select>
            </div>
            <div className="flex flex-col w-72 gap-6 pt-3">
                <select variant="standard" label="Select Version">
                    <option>Legal</option>
                    <option>Privacy Policy</option>
                    <option>Payment Policy</option>
                    <option>Shipping Policy</option>
                    <option>Terms & Conditions</option>
                </select>
            </div>
        </Fragment>
    );
};

export default FooterDropdown;