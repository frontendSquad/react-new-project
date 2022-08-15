import React from 'react'
import BtnLink from '../../../component/BtnLink'
import HeadingMain from '../../../component/HeadingMain'
import ParaMain from '../../../component/ParaMain'

function Modern_Apartments() {
  return (
    <div>
			<section className="Modern_Apartments">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 mb-4 mb-lg-0 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
							<div className="MA_slider">
								<div className="myItems">
									<HeadingMain Headingtitle='Modern Apartments' headintclas='primary_color' />
									{/* <h2 className="primary_color">Modern Apartments</h2> */}
									<h4>$79 at night</h4>
									<ParaMain ParaText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...' ParaClass='mb-4'/>
									{/* <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</p> */}
									{/* <a href="#_" className="redirect-btn">Book Now</a> */}
									<BtnLink LinkClass='redirect-btn' LinkPath='#_' LinkText='Book Now' />
								</div>
							</div>
						</div>
						<div className="col-lg-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.1s">
							<img src={require('../../../assets/images/img1.png')} className="w-100" alt='#' />
						</div>
					</div>
				</div>
			</section>      
    </div>
  )
}

export default Modern_Apartments
