import React from 'react'
import About from './Mycomponent/About'
import ContactPage from './Mycomponent/contactPage'
import Home from './Mycomponent/Home'
import Project from './Mycomponent/Project'
import Skill from './Mycomponent/Skill'
import "./index.css"


const AppHome = () => {
  return (
    <div className="mainpage ">
      <Home />
      <About />
      <Skill />
      <Project />
      <ContactPage />
    </div>
  )
}

export default AppHome