import './property.css'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function Property(value) {

    return (

        <div className="property-card">
            <Link className='link-card' to={`/properties/${value.value.zpid}`}>
                <div className='up'>
                    <div className='property-img'>
                        <img className='picture' src={`${value.value.imgSrc}`} alt="" />
                    </div>
                    <div className='inside'>
                        <div className='inside-results'>
                            <div> <i className="fas fa-bed"></i> </div>
                            <div>{` ${value.value.bedrooms}`} </div>
                        </div>
                        <div className='inside-results'>
                            <div> <i className="fas fa-bath"></i> </div>
                            <div>{` ${value.value.bathrooms}`} </div>
                        </div>
                        
                        

                    </div>
                </div>
                <div className='down'>
                    <div className='details'>
                        <div className='location'>
                            <div id='adress'>{`Adress: ${value.value.streetAddress}`}</div>
                            <div>{`City: ${value.value.city}`}</div>
                            <div>{`Country: ${value.value.country}`}</div>
                        </div>
                    </div>
                    <div id='animation'>
            
                    </div>
                </div>
            </Link>
        </div >


    )
}
export default Property;