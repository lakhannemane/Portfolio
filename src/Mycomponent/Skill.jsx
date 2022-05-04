import React from 'react'
import "./Skill.css"

const Skill = () => {
    return (
        <div className=' pt-3 mb-4 skillpage'  >
            <div className="container">
                <h2 className='text-center Heading'>Skills  <span className='abs'> & Abilities</span></h2>
                <h4 className='text-center heading'>Frontend <span style={{ fontWeight: "600" }}>&#8595;</span></h4>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <span>React js:</span>
                        <span class="progress">

                            <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                70%
                            </span>
                        </span>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <span>JavaScript:</span>
                        <span class="progress">

                            <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                80%
                            </span>
                        </span>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <span>CSS:</span>
                        <span class="progress">

                            <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                60%
                            </span>
                        </span>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <span>Redux:</span>
                        <span class="progress">

                            <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                50%
                            </span>
                        </span>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">
                        <span>Material Ui:</span>
                        <span class="progress">

                            <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                60%
                            </span>
                        </span>


                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">


                        <span>Bootstrap:</span>
                        <span class="progress">

                            <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                80%
                            </span>
                        </span>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-4">

                        <span>HTML5:</span>
                        <span class="progress">

                            <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                90%
                            </span>
                        </span>
                    </div>
                </div>
                <div>

                    <h4 className='text-center heading mt-2'>Backend <span style={{ fontWeight: "600" }}>&#8595;</span></h4>
                    <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-4">

                            <span>NodeJs :</span>
                            <span class="progress">

                                <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                    90%
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-4">

                            <span>MongoDB:</span>
                            <span class="progress">

                                <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                    90%
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-center heading mt-2'>Other Skills <span style={{ fontWeight: "600" }}>&#8595;</span></h4>
                    <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-4">

                            <span>Git:</span>
                            <span class="progress">

                                <span class="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                    90%
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skill