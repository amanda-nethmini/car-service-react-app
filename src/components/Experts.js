import React from "react";
import "../styles/Experts.css";
import Header from "./Header";

function Experts() {

    return(
        <div>
            <Header/>
            <br/>
            <h1 className="experts-heading">Our Creative Experts</h1>
            <br/>
            <div className="experts-row">
                <div className="experts-column">
                    <a href="/">
                        <img src="https://thumbs.dreamstime.com/b/happy-car-mechanic-inspection-technician-holding-wrench-smiling-to-camera-fixing-customer-car-claim-service-169448271.jpg" className="experts-image" alt="Blog"/>
                    </a>
                    <br/><br/>
                    <h5 className="experts-title">Alia Butty</h5>
                    <br/>
                    <p className="experts-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Cras vitae molestie magna. Vivamus sed molestie enim 
                        convallis mauris.Aliquam pharetra velit ac enim maximus
                        a commodo augue hendrerit. Phasellus at aliquam est
                    </p>
                </div>
                    
                <div className="experts-column">
                    <a href="/">
                        <img src="https://img.freepik.com/premium-photo/happy-mechanic-standing-by-car_136930-127.jpg?w=2000" className="experts-image" alt="Blog"/>
                    </a>
                    <br/><br/>
                    <h5 className="experts-title">Jeffery Reley</h5>
                    <br/>
                    <p className="experts-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Cras vitae molestie magna. Vivamus sed molestie enim 
                        convallis mauris.Aliquam pharetra velit ac enim maximus
                        a commodo augue hendrerit. Phasellus at aliquam est
                    </p>
                </div>

                <div className="experts-column">
                    <a href="/">
                        <img src="https://media.istockphoto.com/id/468986210/photo/mechanic-smiling-at-the-camera-holding-tool.jpg?s=612x612&w=0&k=20&c=M0B13ruR_dXMv3PVRKOOaL8z2M2SuIO5G9ieClx-CeM=" className="experts-image" alt="Blog"/>
                    </a>
                    <br/><br/>
                    <h5 className="experts-title">Wiley Beata</h5>
                    <br/>
                    <p className="experts-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Cras vitae molestie magna. Vivamus sed molestie enim 
                        convallis mauris.Aliquam pharetra velit ac enim maximus
                        a commodo augue hendrerit. Phasellus at aliquam est
                    </p>
                </div>
            </div>        
        </div>
    )
}

export default Experts;