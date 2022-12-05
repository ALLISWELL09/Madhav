import React from 'react'
import  "./main.css"
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';




 function Contact() {
  return (
    <div>
      	<section className="contact" id="contact">
		<div className="contact-form">
			<form action="">
				<input type="name" placeholder="Your Name" required/>
				<input type="email" placeholder="Your Email Address" required/>
				<input type="" placeholder="Your Mobile Number" required/>
				<textarea name="" id="" cols="5" rows="5" placeholder="Fedback Meassage" required></textarea>
				<input type="submit" value="Send Message" className="submit" required/>
				
			</form>
		</div>
		<div className="contact-text">
			<h2 >Contact <span>Me!</span></h2>
			<h4>If You Any Question then Contact Me Please...</h4>
		
			<div className="list">
				<li><a href="#">9897543657</a></li>
				<li><a href="#">madhavjariwala123@gmail.com</a></li>
				
			</div>

			<div className="contact-icons">
				<a href="https://www.facebook.com/"><i ><FaFacebookF /></i></a>
				<a href="https://www.twitter.com/"><i ><FaTwitter/></i></a>
				<a href="https://www.instagram.com/"><i ><FaInstagram/></i></a>
				
			</div>
		</div>

	</section>
</div>
  )
}

export default Contact
