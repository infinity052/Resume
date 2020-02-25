import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experiences from './Components/Experiences';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App =function(){
  
    return( <div><a id="Home"></a>
           <Navbar/>
           <Header />
           <About/>
           <Education/>
           <Skills/>
           <Projects/>
           <Experiences/>
           <Contact/>
           <Footer/>
        </div>);}
export default App;
    

