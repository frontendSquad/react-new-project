import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
            {/* nav bar  */}
            <header className="temp_1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 mob_width left">
                            <div className="logo">
                                <Link to="/"><img src={require('../assets/images/logo.png')} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 mob_width right">
                            <div className="toggle_btn">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="menu_bar mobile">
                            <ul>
                                <li><Link to="/" className="h-btn">Home</Link></li>
                                <li><Link to="/about" className="h-btn">About</Link></li>
                                {/* <li><Link to="/service" className="h-btn">Service</Link></li>
                                <li><Link to="/contact-us" className="h-btn">Contact Us</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="responsive"></div>
            </header>      
    </div>
  )
}

export default Header
