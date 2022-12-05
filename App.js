import React  from 'react';
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Services from './Components/Services.js'
import Contact from './Components/Contact.js'
import Footer from './Components/Footer.js'

function App(){
  return(

    <>
      <Home/>
      <Header/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
  </>
);
}
export default App;