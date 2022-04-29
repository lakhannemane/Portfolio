import React from 'react'
import chat from '../imge/realtimechatapp.png'
import flipkart from '../imge/flipkart.png'
import app from "../imge/muiapp.png"
import employee from '../imge/Employee.png'
import './Project.css'


const Project = () => {
    return (

        <div className='container mt-2 pt-5 mb-5  '   >
            <h2 className='text-center Heading mb-5'>Recently Projects</h2>
            <div className="row ">
                <div className=" col-lg-6 col-md-6 col-sm-12 card1 mb-3 ">
                    <div className="card " style={{ width: "100%" }}>
                        <img src={chat} class="card-img-top" alt="..." width="100%" />
                        <div className="card-body">
                            <h4 className="card-text">chat_App</h4>
                            <p>Technology : React js , Socket.io ,React-Routing, NodeJs, HTML ,CSS , Bootstrap , JavaScript</p>
                            <a href='https://github.com/lakhannemane/chat-App'>Click here to open Project</a>
                        </div>
                    </div>

                </div>
                <div className=" col-lg-6 col-md-6 col-sm-12  card1 mb-3">
                    <div className="card " style={{ width: "100%" }}>
                        <img src={flipkart} class="card-img-top" alt="..." width="100%" />
                        <div className="card-body">
                            <h4 className="card-text">Flipkart Clone</h4>
                            <p>Technology : React js , React-Redux , React-Routing,  NodeJs , MongoDB ,Mongoose HTML ,CSS , Bootstrap , JavaScript</p>
                            <a href='https://github.com/lakhannemane/flipkartClone1'>Click here to open Project</a>
                        </div>
                    </div>

                </div>

                <div className=" col-lg-6 col-md-6 col-sm-12  card1 mb-3">
                    <div className="card " style={{ width: "100%" }}>
                        <img src={app} class="card-img-top" alt="..." width="100%" />
                        <div className="card-body">
                            <h4 className="card-text">MUI_APP(Material_ui)</h4>
                            <p >Technology : React js , HTML ,CSS , Material-Ui , JavaScript</p>
                            <a href='https://github.com/lakhannemane/MUI_app'>Click here to open Project</a>
                        </div>
                    </div>

                </div>

                <div className=" col-lg-6 col-md-6 col-sm-12 card1  mb-3">
                    <div className="card " style={{ width: "100%" }}>
                        <img src={employee} class="card-img-top" alt="..." width="100%" />
                        <div className="card-body">
                            <h4 className="card-text">CRUD(ReactJs)</h4>
                            <p >Technology : React js , React-tostify, NodeJs , MongoDB  , HTML ,CSS , Bootstrap , JavaScript</p>
                            <a href='https://github.com/lakhannemane/employeeData'>Click here to open Project</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Project