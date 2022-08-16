import React from 'react'
import { Link } from 'react-router-dom'

function Become_Host(props) {
	return (
		<div className="row white">
			<div className="col-lg-5 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
				<h2 >{props.data.HeadingBH}</h2>
				<p className="mb-5">{props.data.paraBH}</p>
    			<Link className={props.data.LinkClass}  to={props.data.PathName} >{props.data.LinkText}</Link>
			</div>
			<div className="col-lg-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.1s">
				{/* <img src={require('../../../assets/images/img2.png')} className="w-100" /> */}
				<img src={require(`../../../assets/images/${props.data.imagesBH}`)} className="w-100"  alt=""/>
			</div>
		</div>
  )
}

export default Become_Host