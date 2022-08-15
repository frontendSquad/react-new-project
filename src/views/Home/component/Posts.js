import React from 'react'

function Posts() {
  return (
    <div>
			<section className="posts">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mb-4 mb-lg-0  wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
							<div className="post_clm">
								<img src={require('../../../assets/images/post1.png')} className="w-100" />
								<div className="post_content">
									<h5 className="mb-0">Lorem Ipsum Dummy Text..</h5>
									<p className="my-4 pst_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
									<a href="#_" className="redirect-btn">Read More</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="row ">
								<div className="col-lg-6 mb-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
									<img src={require('../../../assets/images/post2.png')} className="w-100" />
									<div className="inner_post_content">
										<h5 className="mt-3">Lorem Ipsum Text..</h5>
										<p className="pst_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</p>
										<ul className="byAdmin btn_set">
											<li><a href="#">By Admin</a></li>
											<li><a href="#">April 28,2022</a></li>
										</ul>
									</div>
								</div>
								<div className="col-lg-6 mb-4 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.1s">
									<img src={require('../../../assets/images/post3.png')} className="w-100" />
									<div className="inner_post_content">
										<h5 className="mt-3">Lorem Ipsum Text..</h5>
										<p className="pst_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</p>
										<ul className="byAdmin btn_set">
											<li><a href="#">By Admin</a></li>
											<li><a href="#">April 28,2022</a></li>
										</ul>
									</div>
								</div>
								<div className="col-lg-6 mb-4  wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
									<img src={require('../../../assets/images/post4.png')} className="w-100" />
									<div className="inner_post_content">
										<h5 className="mt-3">Lorem Ipsum Text..</h5>
										<p className="pst_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</p>
										<ul className="byAdmin btn_set">
											<li><a href="#">By Admin</a></li>
											<li><a href="#">April 28,2022</a></li>
										</ul>
									</div>
								</div>
								<div className="col-lg-6 mb-4  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
									<img src={require('../../../assets/images/post5.png')} className="w-100" />
									<div className="inner_post_content">
										<h5 className="mt-3">Lorem Ipsum Text..</h5>
										<p className="pst_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</p>
										<ul className="byAdmin btn_set">
											<li><a href="#">By Admin</a></li>
											<li><a href="#">April 28,2022</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>         
    </div>
  )
}

export default Posts