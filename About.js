import React from 'react'
import  "./main.css"
import img1 from './img/about.jpg' 

 function About() {
  return (
   <div>
     <section className="about" id="about">

		    <div className="about-img">
				<img src={img1}/>
		    </div>
		<div className="about-text">
			<h2>About <span>Me</span></h2><br />
			<h2> Web Designer!</h2><br />
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae itaque ex nesciunt repellendus maxime, voluptate iure, animi aliquam magni aperiam quo nobis recusandae soluta doloremque, reprehenderit dolor. Maxime illo, consequuntur inventore quam quibusdam totam nam modi fuga odit? Non, quasi rem aut ullam corporis veritatis ipsa eos molestias explicabo.</p>
			<button>
			<a href="#" className="btn">More About</a>
			</button>
		    </div>
	</section>
   </div>
 
  )
}
export default About
