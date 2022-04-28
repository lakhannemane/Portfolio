import React from 'react'
import { AiFillLinkedin, AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='container-fluid bg-secondary  justify-content-center'>
            <div className='d-flex justify-content-center  '>
                <a href=" https://www.linkedin.com/in/laxman-nemane-931045216" style={{fontSize:"30px" , margin: "10px 10px" , color:"black" }}><AiFillLinkedin /></a>
                <a href='https://github.com/lakhannemane'  style={{ fontSize:"30px" , margin: "10px 10px"  , color:"black"}}><AiFillGithub /></a>
                <a href='https://www.instagram.com/itsme_lakhan/' style={{fontSize:"30px" , margin: "10px 10px"  , color:"black" }}><AiFillInstagram></AiFillInstagram></a>
                <a style={{fontSize:"30px" ,  margin: "10px 10px" }}><AiFillFacebook /></a>
            </div>
        </div>
    )
}

export default Footer