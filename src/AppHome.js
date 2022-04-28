import React from 'react'
import About from './Mycomponent/About'
import ContactPage from './Mycomponent/contactPage'
import Home from './Mycomponent/Home'
import Project from './Mycomponent/Project'
import Skill from './Mycomponent/Skill'

const AppHome = () => {
  return (
    <>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <ContactPage/>
    </>
  )
}

export default AppHome