import { Outlet, Link } from "react-router-dom"
import './layout.css'
import Logo from './../assets/logo.png'
import { useState } from "react"
const idArr = [112081301,28114795,27997528,28300032,80538363,28108379,80512450,2061468477,2057735664]


function Layout() {
    const [random,setRandom] = useState()
    console.log(random);
    
    return (
        <div>
            <div className="navbar">
                <div className="links-bar">
                    <Link to={``} className="logo-background"><img id="logo" src={Logo} alt="" /></Link>
                    <Link className="link" id="contact">Contact Us</Link>
                </div>
            </div>
            <div className="image">
                <div className="sort">
                    <Link onClick={()=> setRandom(Math.floor(Math.random() * 9))} to={`properties/${idArr[random]}`} className="button"><div className="text-button">Surprise me</div></Link>
                    <Link to={'/properties'} className="button"><div className="text-button">Buy</div></Link>
                    <Link to={'/favorite'} className="button"><div className="text-button">Favorites</div></Link>
                    
                </div>
            </div>
            <br />
            <Outlet />




        </div>

    )

}
export default Layout