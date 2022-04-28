import React from 'react'
import Pass from '../imge/dsc.JPG'
import './Home.css'
import { FcDownload } from "react-icons/fc";
import { Link } from 'react-router-dom';
import pdf from '../imge/resume.pdf'

const Home = () => {
    return (
        <div className='main_page'>

            <div className=" d-flex  justify-content-center flex-column pt-4  " style={{ height: "70vh" }} >
                <div className="row ms-1 " >
                    <div className="col-md-12 col-lg-5 col-sm-12   ">
                        <div className='  text-center  '>
                            <img className="img1" src={Pass} alt="" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 col-sm-12  ">
                        <div className=' conatnet  '>
                            <h3 className='greeting'>Hii <span>I'm</span></h3>
                            <h2>Laxman Nemane</h2>
                            <marquee behavior="scroll" direction="Up" scrollamount="3" style={{ color: "yellow", fontSize:"27px" }}>And I am React Developer</marquee>
                            <p className="sub">I'm an software developer with excellent problem solving skills and ability to perform well in a team. Passionate about coding and developing challenging projects.</p>
                            <a href={pdf} className="btn1" download >
                                <button type="button " class="btn  btn-success me-3 ">Download Resume</button>
                            </a>
                            <Link to='/about' className="btn1">
                                <button type="button" class="btn btn-success ">About</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home