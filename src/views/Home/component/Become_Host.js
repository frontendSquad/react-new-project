import React from 'react'
import BtnLink from '../../../component/BtnLink'

function Become_Host(props) {
	return (
    <>


		<div className="row align-items-end white">
			<div className="col-lg-5 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
				<h2 >{props.data.HeadingBH}</h2>
				<p className="mb-5">{props.data.paraBH}</p>
				<BtnLink />
			</div>
			<div className="col-lg-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.1s">
				{/* <img src={require('../../../assets/images/img2.png')} className="w-100" /> */}
				<img src={require(`../../../assets/images/${props.data.imagesBH}`)} className="w-100"  alt=""/>
			</div>
		</div>

		{/* <div className="row align-items-center mt-5 white">
			<div className="col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
				<img src={require('../../../assets/images/img3.png')} className="w-100" />
			</div>
			<div className="col-lg-5 ps-5 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
				<h2 >Who we are</h2>
				<p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
				<a href="#_" className="redirect-btn">Read More</a>
			</div>
		</div> */}
    </>
  )
}

export default Become_Host