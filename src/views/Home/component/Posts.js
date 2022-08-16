import React from 'react'
import { Link } from 'react-router-dom'
// import BtnLink from '../../../component/BtnLink'

function Posts(props) {
	return (
		<>
			<div className="post_clm my-2">
				<img src={require(`../../../assets/images/${props.data.ImagePS}`)} className="w-100" alt='' />
				<div className="post_content">
					<h5 className="mt-3">{props.data.HeadingPS}</h5>
					<p className="pst_txt">{props.data.ParaPS}</p>
					{props.data.Detail ?
						<div className='byAdmin btn_set'>
							<span className='me-2'>By {props.data.Author}</span>
							<span>{props.data.Date}</span>
						</div> : ''
					}
					{
						props.data.Button ?
							<Link className="redirect-btn" to={props.data.LinkPathPS} >{props.data.LinkTextPS}</Link> : ''
					}

				</div>
			</div>
			{/* <div className="col-lg-6 mb-4 mb-lg-0  wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
			<div className="post_clm">
				<img src={require('../../../assets/images/post1.png')} className="w-100" />
				<div className="post_content">
					<h5 className="mb-0">Lorem Ipsum Dummy Text..</h5>
					<p className="my-4 pst_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
					<a href="#_" className="redirect-btn">Read More</a>
				</div>
			</div>
		</div>        */}
		</>
	)
}

export default Posts