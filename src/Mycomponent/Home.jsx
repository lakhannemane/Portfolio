import React from 'react'
import Pass from '../imge/DSC_5014.png'
import './Home.css'
import { FcDownload } from "react-icons/fc";
import { Link } from 'react-router-dom';
import pdf from '../imge/resume.pdf'

const Home = () => {
    return (
        <div className="main_page " >
            <div className="row" >
                <div className="col-sm-12 col-md-6 col-lg-4" >
                    <div className="text-center">
                        <img src={Pass} alt="passs" className="img1" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8" >
                    <div className=' conatnet  '>
                        <h3 className='greeting'>Hi There</h3>
                        <h4>I'm <span className='name'>Laxman Nemane</span></h4>
                        <marquee behavior="scroll" direction="Up" scrollamount="3" >And I am React Developer</marquee>
                        <p className="sub">I'm an software developer with excellent problem solving skills and ability to perform well in a team. Passionate about coding and developing challenging projects.</p>
                   
                            <a href={pdf} className="btn1" download >
                                <button type="button " class="btn  btn-success me-3 ">Download Resume</button>
                            </a>
                       
                      
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home


