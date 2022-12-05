import React from 'react'
import "./main.css"
import img2 from './img/home.jpg'

function Home() {
	return (
		<div>
			<section className="home" id="home">
				<div className="home-text">
					<div className="slide">
						
						
					</div>
				<h1>Madhav Jariwala</h1>
					<h3>Web<span> Desinger</span></h3>
					

				
				</div>
				<div className='home-img'>
				<img src={img2}/>

				</div>
			</section>
		</div>
	)
}
export default Home
