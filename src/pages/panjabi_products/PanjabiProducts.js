import axios from 'axios';
import React, { Fragment, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/menubar_without_transparent_background/Navbar.js';
import FilterSortDrawer from '../../components/filters_and_sort_drawer/FilterSortDrawer.js';
import MobileMenu from '../../components/mobile_menu/MobileMenu.js';
// Drawer
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import OtherNav from '../../components/menubar_without_transparent_background/OtherNav.js';
import "../../assets/css/style.css"
import { GiSelfLove } from 'react-icons/gi';
// extra
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Luxury',
    'Premium',
    'Platinum',
    'Sahara',
    'Fitted',
];

const colors = [
    "Black",
    "White",
    "Blue",
    "Brown",
    "Grey",
    "Purple",
    "Maroon",
    "Multi",
    "Off White",
    "Green",
    "Red",
    "Golden",

]
// extra



const PanjabiProducts = () => {
    const [panjabi, setPanjabi] = useState([]);

    useEffect(() => {
        axios
            .get("/data/panjabi_products.json")
            .then((res) => setPanjabi(res.data))
            .catch((err) => console.log(err))
    }, [])

    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => (a.price > b.price ? -1 : 1) }, //low to high
        descending: { method: (a, b) => (a.price > b.price ? 1 : -1) } // high to low
    }

    // Filters and sort drawer
    const [isOpenFilterSortDrawer, setIsOpenFilterSortDrawer] = useState(true);
    const toggleIsFilterSortDrawer = () => {
        setIsOpenFilterSortDrawer((prevState) => !prevState)
    }
    console.log(isOpenFilterSortDrawer);
// extra
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [productColor, setProductColor] = React.useState([]);
    const handleProductColorChange = (event) => {
        const {
            target: { value },
        } = event;
        setProductColor(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
// extra

    return (
        <Fragment>
            {/* <Navbar /> */}
            <OtherNav/>
            <MobileMenu />
            {/* <HomeNav></HomeNav> */}
            <h1 className='text-center text-3xl font-semibold pt-5 cetagory_title mt-24 lg:mt-0'>This Is Shop</h1>
            <div className='grid grid-cols-2'>
                <div className='mx-5 py-2'>
                    <h1 className='text-left mt-16 text-sm special_otehr_nav'>Home | Shop </h1>
                </div>
                <div className='mx-5 text-right sort-price mr-14 py-2'>
                    <button type="" className='mt-16 special_otehr_nav' onClick={toggleIsFilterSortDrawer}>Filters & Sort</button>
               
                 
                </div>
            </div>
            <div className='flex'>
                <div className={` ${isOpenFilterSortDrawer ? 'w-[100%] grid-cols-2' : 'w-[80%] grid-cols-1'}  grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-2 pb-5 mx-5`}>
                {
                    panjabi
                        .sort(sortMethods[sortState].method)
                        .map((data, index) => {
                            const { id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price, galleryImages } = data;
                            return (
                                <div key={index} className='panjabisProducts'>
                                    <Link to={`/panjabis/${data.id}`}
                                        state={{ id, product_title, category, code, color, images, size, description, details, material, care, stock_status, regular_price, sale_price, galleryImages }}
                                    >  <div className='panjabisProducts_img-dev '>
                                        <img
                                            className=''
                                            src={data.images[0]}
                                            onMouseEnter={(e) => e.target.src = data.images[1]}
                                            onMouseLeave={(e) => e.target.src = data.images[0]}
                                            alt="" />
                                        </div>
                                        <button className='wish_love'>
                                        <GiSelfLove className='text-2xl text-black bg-white' />
                                        </button>
                                        <button className='sale'>
                                        {/* <GiSelfLove className='text-2xl text-black bg-white' /> */}
                                        <p>Sale</p>
                                        </button>
                                        <h1 className='lg:text-left md:text-left text-center font-gilroybold'><a href="/panjabis">{data.product_title}</a></h1>
                                        <p className='text-inherit font-semibold lg:text-left md:text-left text-center'>Product Code: {data.code}</p>
                                        <p className='lg:text-left md:text-left text-center font-gilroybold'>BDT: {data.regular_price}</p>
                                    </Link>
                                </div>
                            )
                        })
                }
            </div>
                <div className='p-5 '>
                    <div className={`sticky top-0 ${isOpenFilterSortDrawer ? 'hidden' :'block lg:w-[100%] w-[150px]'}`}>
                {/* <div className={`p-5${isOpenFilterSortDrawer?'block':'hidden'}`}> */}
                    <h2 className='text-center lg:text-3xl text-[#121D45] font-gilroy'>Filters and Sort</h2>
                    <div className='pt-5 text-center'>
                        <FormControl sx={{ m: 1, }} className='lg-[250px] w-[150px]'>
                            <InputLabel id="demo-multiple-checkbox-label">Collection</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Collection" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='pt-5 text-center'>
                            <FormControl sx={{ m: 1}} className='lg-[250px] w-[150px]'>
                            <InputLabel id="demo-multiple-checkbox-label">Color</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={productColor}
                                onChange={handleProductColorChange}
                                input={<OutlinedInput label="Color" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {colors.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='text-center pt-5'>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Sort By</FormLabel>
                            <RadioGroup
                                aria-labelledBy="demo-radio-buttons-group-label"
                                defaultValue="default"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="default" control={<Radio />} label="Default" />
                                <FormControlLabel value="ascendingPrice" control={<Radio />} label="Ascending Price" />
                                <FormControlLabel value="descendingPrice" control={<Radio />} label="Descending Price" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className='pt-5'>
                        <p className='text-center font-gilroy text-[#121D45]'>Select Price Range</p>
                        <Box  className="mx-auto lg:w-[300px] w-[150px]">
                            <Slider defaultValue={1000} min={100} max={10000} aria-label="Default" valueLabelDisplay="auto" />
                        </Box>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PanjabiProducts;