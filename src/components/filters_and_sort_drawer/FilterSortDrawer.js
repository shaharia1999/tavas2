import React, { Fragment } from 'react';
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

const FilterSortDrawer = () => {
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
    return (
        <Fragment>
            <div className='p-5'>
                <h2 className='text-center text-3xl text-[#121D45] font-gilroy'>Filters and Sort</h2>
                <div className='pt-5 text-center'>
                    <FormControl sx={{ m: 1, width: 250 }} className="">
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
                    <FormControl sx={{ m: 1, width: 250 }}>
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
                    <Box width={300} className="mx-auto">
                        <Slider defaultValue={1000} min={100} max={10000} aria-label="Default" valueLabelDisplay="auto" />
                    </Box>
                </div>
            </div>
        </Fragment>
    );
};

export default FilterSortDrawer;