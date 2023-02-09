import React, { Fragment, lazy, useState } from 'react';
import { GiSelfLove } from "react-icons/gi";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

// components or pages
const Navbar = lazy(() => import('../../components/menubar_without_transparent_background/Navbar.js'));

const MyAccount = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Fragment>
            <Navbar />
            <p className='text-center text-[#121D45] text-3xl py-4'>My Account</p>
            <div className='max-w-[800px] mx-auto'>
                <Accordion open={open === 1} className="pb-5">
                    <AccordionHeader onClick={() => handleOpen(1)} className="uppercase">
                        1. Edit your account Information
                    </AccordionHeader>
                    <AccordionBody>
                        <section>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-sm text-gray-600">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            for="name"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label
                                            for="email"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-[#121D45] border-0 py-2 px-8 focus:outline-none font-gilroy uppercase hover:bg-indigo-600 rounded text-lg">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </section>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className="pb-5">
                    <AccordionHeader onClick={() => handleOpen(2)} className="uppercase">
                        2. Change Your Password
                    </AccordionHeader>
                    <AccordionBody>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label
                                    for="password"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Previous Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label
                                    for="password"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-[#121D45] border-0 py-2 px-8 focus:outline-none font-gilroy uppercase hover:bg-indigo-600 rounded text-lg">
                                Save password
                            </button>
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} className="pb-5">
                    <AccordionHeader onClick={() => handleOpen(3)} className="uppercase">
                        3. Modify your address book entries
                    </AccordionHeader>
                    <AccordionBody>
                        <div className='p-2 w-full'>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <p><span className='font-semibold'>Name: </span>Mahmudur Rahman</p>
                                    <p><span className='font-semibold'>Address: </span>Techabyte Solutions, Mohakhali DOHS, Dhaka</p>
                                    <p><span className='font-semibold'>Phone: </span>01888888888</p>
                                </div>
                                <div>
                                    <button className="bg-green-500 text-white left-2/4 w-28 h-10 m-2 rounded-lg">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white left-2/4 w-28 h-10 m-2 rounded-lg">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AccordionBody>
                </Accordion>
            </div>
        </Fragment >
    );
};

export default MyAccount;