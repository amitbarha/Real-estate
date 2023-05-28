import { useParams } from "react-router-dom";
import data from './../data.json'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { MuiTelInput } from 'mui-tel-input'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './property-page.css'
import './layout.css'
import { Button, TextField } from "@mui/material";
function PropertyPage() {

    const form = useRef();

    const sendEmail = (e) => {
       
            e.preventDefault();

            emailjs.sendForm('service_vi3wwbg', 'template_3if17xx', form.current, 'JOKmoWcByn6zBklXt')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

    

    };

    const [propertyData, setPropertyData] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [block, setBlock] = useState()
    const [phone, setPhone] = useState('')

    const [checked, setChecked] = useState('')
    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }



    useEffect(() => {
        setPropertyData(data.results)
    }, [])
    console.log(propertyData);
    const { id } = useParams()
    const dataById = propertyData?.find((house) => house.zpid == id)
    console.log(dataById);
    const handleChangeLike = () => {
        if (dataById) {
            const like = dataById.shouldHighlight
            dataById.shouldHighlight = !like
           like? localStorage.removeItem(id):localStorage.setItem(id,!like)
        }
    }
    console.log(time);



    return (
        <div className="property-page">
            <div id="div-img">
                <img id="property-img" src={`${dataById?.imgSrc}`} alt="" />
            </div>
            <div id="details">
                <br />
                <div id="status">

                    <div id="circle"></div>
                    <div id="active"> For sale - Active</div>
                    <div id="liked"><Checkbox defaultChecked={localStorage.getItem(id)} onChange={handleChangeLike} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </div>
                    <div id="zillow-property"><a className="btn" href={`https://www.zillow.com/homedetails/3010-Paige-St-Houston-TX-77004/${id}_zpid/`} target="_blank" rel="noopener noreferrer">for more</a></div>
                </div>
                <div id="adress-grid">
                    <br />
                    <span id="street-grid">{`${dataById?.streetAddress}, `}</span>
                    <span>{`${dataById?.city} , ${dataById?.country}`}</span>
                </div>
                <div className="house-details-grid">
                    <div className="price-grid">
                        <div>{`$${dataById?.price.toLocaleString()}`}</div>
                    </div>
                    <div className="bed-bath-grid">
                        <div className="num-bed-bath">{dataById?.bedrooms}</div>
                        <div className="bed-bath">Bedrooms</div>
                    </div>
                    <div className="bed-bath-grid">
                        <div className="num-bed-bath">{dataById?.bathrooms}</div>
                        <div className="bed-bath">Bathrooms</div>
                    </div>
                    <div className="bed-bath-grid">
                        <div className="num-bed-bath">{Math.floor(dataById?.lotAreaValue)}</div>
                        <div className="bed-bath">Sqrft</div>
                    </div>
                </div>
            </div>
            <div id="agent">
                <form className="form-visit" ref={form} onSubmit={sendEmail}>
                    <div id="title-agent"> Let's visit </div>
                    <br />
                    <div className='pick-date'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className="inputs-form" onChange={(newValue) => setDate(newValue)} />
                        </LocalizationProvider>
                        <input className="none" type="text" name="date" value={`${date?.$D}/${date?.$M+1}/${date?.$y}`} />
                    </div>
                    <br />

                    <div className={`pick-time`}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker className="inputs-form" onChange={(newTime) => setTime(newTime)} label="pick time" />
                        </LocalizationProvider>
                        <input className="none" type="text" name="time" value={`${time?.$H}:${time?.$m}`} />
                    </div>
                    <br />
                    <div className="email">
                        <TextField className="inputs-form" name="user_email" label="Email" ></TextField>
                    </div>
                    <br />
                    <div className="name">
                        <TextField className="inputs-form" name="name" label="Name" ></TextField>
                    </div>
                    <br />
                    <div className="agree">
                        
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
            <div id="about">
                <h1>about this home</h1>
                <br />
                <p>Explore a diverse range of homes tailored to your unique preferences.
                    From charming cottages to spacious villas, we have a property to suit every lifestyle.
                    Immerse yourself in the warmth of a cozy family home or indulge in the grandeur of an elegant mansion.
                    Our extensive collection showcases a variety of architectural styles, sizes, and locations,
                    ensuring that you'll find the perfect match. Begin your search today and discover the home that resonates with your dreams."
                </p>
            </div>
        </div>
    )
}
export default PropertyPage;