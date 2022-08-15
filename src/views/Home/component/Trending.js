import React from 'react'




function Trending(props) {

  return (
    <div>					
			<div className="myItems">
				<img src={require(`../../../assets/images/${props.data.images}`)} alt=""/>
				<h5 className="slide_content m-0">{props.data.heading5}</h5>
			</div>    
    </div>
  )
}

export default Trending
