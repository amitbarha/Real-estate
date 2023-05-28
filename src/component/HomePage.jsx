import './home-page.css'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <div className="welcome">Welcome to propertopia, Where your new home is!   </div>
            <br />
            <div className='about'>
                <div className='cube-info' id='buy'>
                    <h1 className='title'>buy</h1>
                    <p className='description'>
                        <p className='mark'> Discover your dream home in America </p> with our comprehensive real estate web platform.
                        As an experienced agent,<p className='mark'> I have 9 exceptional houses available</p> sourced directly from <p className='mark'>trusted data providers like Zillow.</p>
                        Explore a wide range of properties and let me guide you.
                    </p>
                    <br />
                    <div className='link-button'>
                        <Link to={'/properties'} className="cta">
                            <span>Let's buy!</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className='cube-info' id='rent'>
                    <h1 className='title'>rent</h1>
                    <p className='description'>
                        <p className='mark'>Discover your perfect rental home in America </p> with our convenient real estate web platform.
                        As a seasoned agent,  <p className='mark'>I offer 9 exceptional houses for rent</p> handpicked from reliable data sources like Zillow.
                        Explore a diverse range of rental properties and <p className='mark'>allow me to assist you in finding the ideal home </p> that meets your unique preferences and lifestyle.
                    </p>
                    <br />
                    <div className='link-button'>
                        <Link to={'/rent'} className="cta">
                            <span>Let's rent!</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className='cube-info' id='sell'>
                    <h1 className='title'>sell</h1>
                    <p className='description'>Explore a diverse range of houses for sale in America through our real estate web platform.
                        For a curated selection, I can connect you with a trusted Zillow agent who will guide you in finding your dream home.
                        Enjoy a seamless and personalized buying experience designed to meet your unique preferences. Begin your journey to homeownership today with us.
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='link-button'>
                        <a href='https://www.zillow.com/sellers-guide/'  target="_blank" rel="noopener noreferrer">
                            <div className="scene">
                                <div className="cube">
                                    <span id='zillow' className="side top"></span>
                                    <span className="side front">Go to zillow</span>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default HomePage