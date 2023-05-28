import { useParams } from "react-router-dom";
import data from './../data.json'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MuiTelInput } from 'mui-tel-input'
import './property-page.css'
import './layout.css'
import { Button } from "@mui/material";
function PropertyPageRent() {
    const [propertyData, setPropertyData] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [block, setBlock] = useState()
    const [phone, setPhone] = useState('')
    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vi3wwbg', 'template_o29wbc6', form.current, 'JOKmoWcByn6zBklXt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        setPropertyData(data.results)
    }, [])
    console.log(propertyData);
    const { id } = useParams()
    const dataById = propertyData?.find((house) => house.zpid == id)
    console.log(date);

    return (
        <div className="property-page">
            <div id="div-img">
                <img id="property-img" src={`${dataById?.imgSrc}`} alt="" />
            </div>
            <div id="details">
                <br />
                <div id="status">
                    <div id="circle-rent"></div>
                    <div id="active"> For rent - Active</div>
                </div>
                <div id="adress-grid">
                    <br />
                    <span id="street-grid">{`${dataById?.streetAddress}, `}</span>
                    <span>{`${dataById?.city} , ${dataById?.country}`}</span>
                </div>
                <div className="house-details-grid">
                    <div className="price-grid">
                        <div>{`$${dataById?.rentZestimate.toLocaleString()}/mo`}</div>
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
                <div id="title-agent"> Let's visit </div>
                <br />
                <div className='pick-date'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker onChange={(newValue) => setDate(newValue)} />
                    </LocalizationProvider>
                </div>
                <br />

                <div className={`pick-time  `}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker onChange={(newTime) => setTime(newTime)} label="pick time" />
                    </LocalizationProvider>
                </div>
                <br />
                <div className="phone-number">
                    <MuiTelInput value={phone} label={"phone number"} onChange={handleChange} />
                </div>
                <br />
                <br />
                <div className="agree">
                    <Button onClick={(e) => sendEmail(e)}>agree</Button>
                </div>
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
export default PropertyPageRent;