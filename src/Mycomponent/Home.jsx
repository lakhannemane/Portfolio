import React from 'react'
import Pass from '../imge/DSC_5014.png'
import './Home.css'
import { FcDownload } from "react-icons/fc";
import { Link } from 'react-router-dom';
import pdf from '../imge/resume.pdf'

const Home = () => {
    return (
        <div className=" conatiner main_page pt-5 mb-5 pb-3 " >
            <div className="row" >
                <div className="col-sm-12 col-md-6 col-lg-4" >
                    <div className="text-center">
                        <img src={Pass} alt="" className="img1"  />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8" >
                <div className=' conatnet ms-3 '>
                            <h3 className='greeting'>Hi There</h3>
                            <h2>I'm <span className='name'>Laxman Nemane</span></h2>
                            <marquee behavior="scroll" direction="Up" scrollamount="3" >And I am React Developer</marquee>
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

    )
}

export default Home


{/* <div className='main_page mb-4'>
            <div className=" d-flex  justify-content-center flex-column pt-4"  >
                <div className="row" >
                    <div className="col-md-12 col-lg-5 col-sm-12   ">
                       
                    </div>
                    <div className="col-md-12 col-lg-7 col-sm-12  ">
                        <div className=' conatnet  '>
                            <h3 className='greeting'>Hii <span>I'm</span></h3>
                            <h2>Laxman Nemane</h2>
                            <marquee behavior="scroll" direction="Up" scrollamount="3" >And I am React Developer</marquee>
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
        </div> */}