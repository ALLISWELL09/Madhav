import React from 'react'
import  "./main.css"

 function Header() {
  return (
    <div>
      <header>
		{/* <a href="#" className="one">R.B</a> */}

       <div className='Navmain'>

		<ul className="navlist">
			<li><a href="#home" className="active">Home</a></li>
			<li><a href="#about" >About Me</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#contact">Contact Me</a></li>
		</ul>
	   </div>

		<div className="bx bx-menu" id="menu-icon">

		</div>
	</header>
    </div>
  )
}
export default Header
