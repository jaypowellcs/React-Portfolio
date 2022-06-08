import React from 'react';
import './App.css';
import Header from './app/components/Header';
//import Header2 from './app/components/Header2';
import Footer from './app/components/Footer';
import Home from '../src/features/home/Home';
import About from '../src/features/about/About';
import Skills from './features/skills/Skills';
import School from './features/education/School';
import Portfolio from './features/portfolio/Portfolio';
import Contact from './features/contact/Contact';


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