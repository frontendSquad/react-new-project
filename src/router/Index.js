import React from "react";

import Header from "../component/Header";
import {
    Routes,
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';
// screns
// import {Col, Row, Container} from 'react-bootstrap'
import Home from '../views/Home/Index';
import About from '../views/About';
function Index() {
    return (


        <Router>
            <Header/>
            {/* all routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} /> 
                {/* <Route path="/service" element={<Service />} />
                <Route path="/contact-us" element={<Contact Us />} /> */}
            </Routes>
        </Router>
    );
}
export default Index