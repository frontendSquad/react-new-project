import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-2">
                        <div className="footer-info">
                            <a href="./index.php"><img src={require('../assets/images/logo.png')} className="logo mb-4 img-fluid" alt="logo" /></a>
                            <ul>
                                <li>
                                <div className="d-flex align-items-center">
                                    <img src={require('../assets/images/whatsapp.png')} className="mr-3" alt="whatsapp" />
                                    <div className="footer-contact ms-4">
                                    <h6 className="mb-3">HELP & SUPPORT</h6>
                                    <a href="tel:254000000000"><h3>(+254) 000 000 000</h3></a>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <i className="fa fa-envelope-o mx-3 socialIcons"></i>
                                <a href="mailto:support@loremipsum.com">support@loremipsum.com</a>
                                </li>
                                <li>
                                <i className="fa fa-map-marker mx-3 socialIcons"></i>
                                Lorem Ipsum Dummy Text
                                </li>            
                            </ul>
                            <ul className="foot-soci">
                                <li>FOLLOW US</li>
                                <li><a href="#_"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href="#_"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#_"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#_"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6  mb-md-5 mb-2">
                        <div className="footer-info">
                            <h6 className="footer-heading">QUICK LINKS</h6>
                            <ul className="clm-cut">
                                <li><a href="#_">Home</a></li>
                                <li><a href="#_">About Us</a></li>
                                <li><a href="#_">Reservations</a></li>
                                <li><a href="#_">Deals and Offers</a></li>
                                <li><a href="#_">Destinations</a></li>
                                <li><a href="#_">Become a Host</a></li>
                                <li><a href="#_">Reviews</a></li>
                                <li><a href="#_">Our Blog</a></li>
                                <li><a href="#_">Privacy Policy</a></li>
                                <li><a href="#_">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-md-5 mb-2">
                        <div className="footer-info">
                            <h6 className="footer-heading">OUR NEWSLETTER</h6>
                            <p className="f-reg">To stay up-to-date on our promotions,
                            discounts, sales, special offers and more</p>
                            <form action="#">
                                <div className="formWrapper">
                                <input type="email" placeholder="Your email address" required />
                                <button className="prim-btn"><i className="fa fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                        <img src={require('../assets/images/pay.png')} className="mt-4" alt="whatsapp" />
                    </div>
                </div>
            </div>
        </footer>
 
    </div>
  )
}

export default Footer
