import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/features/home/Home';
import About from '../src/features/about/About';
import Skills from '../src/features/skills/Skills';
import School from '../src/features/education/School';
import Portfolio from '../src/features/portfolio/Portfolio';
import Contact from '../src/features/contact/Contact';


function App() {
  return (
    <>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <School></School>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;