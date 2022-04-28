import React from 'react'
import "./Contact.css"

const ContactPage = () => {
    return (
        <div className='container mt-5 Contact_page ' style={{ height: "70vh" }}  >
            <h2 className='text-center Contact_head'>Conatct <span className="me">Me</span> </h2>
            <form>
                <div class="mb-3">
                    <input type="email" className=" contact_detail form-control" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-2">
                    <input type="email" className=" contact_detail form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-2">
                    <input type="email" className=" contact_detail form-control" placeholder='Subject' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-2">
                    <textarea type="email" className=" contact_detail form-control" placeholder='message' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='text-center'>

                <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactPage;