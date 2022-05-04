
import './App.css';

import Navbar from './Mycomponent/Navbar';

import Footer from './Mycomponent/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHome from './AppHome';
import ContactPage from './Mycomponent/contactPage';
import Project from './Mycomponent/Project';
import Skill from './Mycomponent/Skill';
import About from './Mycomponent/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
