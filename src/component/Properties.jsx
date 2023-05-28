import data from './../data.json'
import { useEffect, useState } from 'react';
import Property from './Property';

import './property.css'
import { MenuItem, Select, Box, InputLabel, FormControl } from '@mui/material';
function Properties() {
    const [info, setData] = useState();
    const [sort, setSort] = useState(0);
    useEffect(() => {
        setData(data.results)
    }, [])
    const handleChange = (event) => {
        setSort(event.target.value);
       
    };
    const sorted =info&&info.slice(0, 9).sort((a, b) => b[sort] - a[sort]);
    useEffect(() => {
        if (sort !== 0) {
          setData(sorted);
        }
      }, [sort, sorted]);


    return (
        <div className='all-properties'>
            <div id='sort-div'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="selectLable">Sort by</InputLabel>
                        <Select
                            id="select"
                            onChange={handleChange}
                            value={sort}
                        >
                            <MenuItem value={0}>sort</MenuItem>
                            <MenuItem value={'price'}>price</MenuItem>
                            <MenuItem value={'lotAreaValue'}>area</MenuItem>
                            <MenuItem value={'bedrooms'}>rooms</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/* <div>
                    <input type="number" min={2} max={5} />
                    <div>-</div>
                    <input type="number" min={2} max={5} />
                </div> */}
            </div>
           
            {
            info &&
                info.map((value, index) => {
                    if (index < 9) {
                        return <Property key={index} value={value} />;
                    }
                })}

        </div>

    )
}
export default Properties