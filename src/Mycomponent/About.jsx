import React from 'react'
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
  return (
    <div className='container mt-4  pt-2 mb-5 '  >
      <div className="about_section mx-auto " >
        <div className="row " >
          {/* personal detail */}
          <div className="col-md-12 col-lg-7 col-sm-12 mb-3" >
            <div className="card">
              <div className="card-body main_detail">
                <h3 className='Personal_Heading'>Personal Detail  &#8669;</h3>
                <p><strong>Name</strong>&nbsp;:&nbsp;Laxman Nemane</p>
                <p><strong>Address</strong>&nbsp;:&nbsp;Balewadi, pune. </p>
                <p><strong>Education</strong>&nbsp;:&nbsp;B.E (computer Engineering)</p>
                <p><strong>Email</strong>&nbsp;:&nbsp;lnemane7@gmail.com</p>
                <p><strong>Mobile No</strong>&nbsp;:&nbsp; 9834291623</p>

              </div>
            </div>
          </div>
          {/* prpject experiance */}
          <div className="col-md-12 col-lg-5 col-sm-12 text-center ">
            <div className="conatiner-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6   ">
                  <div className="card " >
                    <div className=" box1">
                      <Link to='/project' style={{textDecoration:"none" , color:"black"}}>
                      <h3 className='Personal-Heading'>Projects</h3>
                      <p className='Project'>4+  <br/></p>
                      </Link>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-cenetr    ">
                  <div className="card "> 
                    <div className=" box1">
                      <h3 className='Personal-Heading'>Certificate </h3>
                      <p className='Project1'>Full Stack Web-develepoment Intership </p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;