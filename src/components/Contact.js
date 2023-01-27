import React from "react";
import "../styles/Contact.css";
import Header from "./Header";

function Contact() {

   return (
         <div>
            <Header/>
            <div className="contact-container">
                  <h1 className="contact-h1">Contact Us</h1>
                  <br/><br/>
                  <ul>
                     <li className="contact-list">
                           <label className="contact-label">Full Name</label>
                           <br/><br/>
                           <i class="lni lni-user"></i>
                           <input className="contact-box" type="text" placeholder="  John Doe"/>
                           <br/><br/>
                     </li>
                     
                     <li className="contact-list">
                           <label className="contact-label" style={{marginLeft:50}}>Email Address</label>
                           <br/><br/>
                           <input className="contact-box" style={{marginLeft:50}} type="text" placeholder="  admin@uideck.com"/>
                           <br/><br/>
                     </li>

                     <br/>

                     <li className="contact-list">
                           <label className="contact-label">Phone Number</label>
                           <br/><br/>
                           <input className="contact-box" type="text" placeholder="  01234567890"/>
                           <br/><br/>
                     </li>
                     
                     <li className="contact-list">
                           <label className="contact-label" style={{marginLeft:50}}>Subject</label>
                           <br/><br/>
                           <input className="contact-box" style={{marginLeft:50}} type="text" placeholder="  Type here"/>
                           <br/><br/>
                     </li>
                     
                     <br/>

                     <li className="contact-list">
                           <label className="contact-label">Your Message</label>
                           <br/><br/>
                           <input className="contact-box" type="text" placeholder="  Type your message here"/>
                           <br/><br/>
                     </li>

                     <br/><br/>

                     <button className="contact-button" type="submit">Send Message</button> 
                     <br/>
                  </ul>
            </div>
         </div>
    )
}

export default Contact;