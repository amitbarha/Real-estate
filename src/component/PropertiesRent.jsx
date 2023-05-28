import data from './../data.json'
import { useEffect, useState } from 'react';
import { MenuItem, Select, Box, InputLabel, FormControl } from '@mui/material';
import './property.css'
import Property from './Property';
function PropertiesRent() {
    const [info, setData] = useState();
    const [sort, setSort] = useState(0);
    useEffect(() => {
        setData(data.results)
    }, [])
    const liked =info&&info.filter((element) => element.shouldHighlight == true);

    return (
        <div className='all-properties'>
           

            {info &&
                liked.map((value, index) => {
                        return <Property key={index} value={value} />;
                })}

        </div>

    )
}
export default PropertiesRent