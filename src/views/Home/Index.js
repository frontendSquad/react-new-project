import React from 'react'
import Banner from '../../component/Banner'
import Trending from './component/Trending'
import Footer from '../Footer'
import Modern_Apartments from './component/Modern_Apartments'
import Become_Host from './component/Become_Host'
import Posts from './component/Posts'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import HeadingMian from '../../component/HeadingMain'


function Home() {
	const Trendingplslid = {
		responsiveClass: true,
		nav: false,
		dots: false,
		autoplay: false,
		loop: true,
		center: true,
		margin: 10,
		smartSpeed: 1000,
		responsive: {
		  0: {
			items: 1,
		  },
		  400: {
			items: 1,
		  },
		  576: {
			items: 2,
		  },
		  992: {
			items: 3,
		  },
		  1000: {
			items: 4,
		  },
		},
	  
	  }
	const Trendingpl = [
		{
			images: 'p1.png',
			heading5: 'los angeles',
		},
		{
			images: 'p2.png',
			heading5: 'los angeles',
		},
		{
			images: 'p3.png',
			heading5: 'los angeles',
		},
		{
			images: 'p4.png',
			heading5: 'los angeles',
		}
	]



	const Become_HLP = [
		{
			HeadingBH: 'Become a Host',
			paraBH: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
			LinkText: 'Get Started', 
			LinkClass: 'redirect-btn', 
			LinkPath:'#_',
			imagesBH: 'img2.png',
	
		},
		{
			HeadingBH: 'Become a Host213',
			paraBH: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
			LinkText: 'Get Started', 
			LinkClass: 'redirect-btn', 
			LinkPath:'#_',
			imagesBH: 'img2.png',
	
		}
	  ]



	return (
		<div>
			<Banner />



			<section className="Trending_Destinations text-center " >
				<div className="container-fluid">
					<div className="row mb-5  wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.1s">
						<div className="col-12">
							<HeadingMian headintclas="primary_color headmingh3" Headingtitle={'Trending Destinations'} />
							<HeadingMian headintclas="headmingh5" Headingtitle={'Explore our selection of the best places around the world'} />
							{/* <h5>Explore our selection of the best places around the world</h5> */}
						</div>
					</div>
					<OwlCarousel className="owl-theme" {...Trendingplslid}>
						{/* {Trendingpl.map(home => 
							<div class='item'>
								<Trending   data={home} />
							</div>
						)}     */}
						{
							Trendingpl.map((item, index) => {
								return (
									<div class='item'>
										<Trending data={item} />
									</div>
								)
							})
						}
					</OwlCarousel>
				</div>
			</section>






			<Modern_Apartments />
			<section className="Become_Host">
				<div className="container">
				{
					// Become_HLP.map((item, index) => {
					// 	<Become_Host data={item} />
					// })
					// Become_HLP.map((item, index) => {
					// 	return (
					// 		<>
					// 			<Become_Host data={item} />
					// 		</>
					// 	)
					// })
					Become_HLP.map((item, index) => {
						return (
							<div>
								<Become_Host data={item} />
							</div>
						)
					})
				}
				</div>
			</section>    


			<Posts />

			<Footer />
		</div>
	)
}

export default Home
