import React from "react";
import "../styles/Blogs.css";
import Header from "./Header";

function Blogs() {

    return(
        <div>
            <Header/>
            <h1 className="blogs-heading">Our Latest Blogs</h1>
            <br/>
            <div className="blogs-row">
                <div className="blogs-column">
                    <a href="/">
                        <img src="https://media.istockphoto.com/id/1299259284/photo/mid-adult-manager-and-young-couple-using-touchpad-in-auto-repair-shop.jpg?b=1&s=170667a&w=0&k=20&c=zZF59PkfvIQLNIF5J2xBbRsY_oTBTyPCxr9UOlpiTrE=" className="blogs-image" alt="Blog"/>
                    </a>
                    <br/><br/>
                    <h5 className="blogs-title">
                        <a href="/">Budget-Friendly Design Ideas to Transform Your Office</a>
                    </h5>
                    <br/>
                    <span><i className="blogs-span"></i> Mar 23, 2022</span>
                    <span><i className="blogs-span"></i> 24 Comment</span>
                    <br/><br/>
                    <p className="blogs-text">
                        Create a workspace your team will love with these money-saving
                        interior Ui/Ux design tips Learn how People.
                    </p>
                    <button className="blogs-button"><a className="blogs-a" href="/">READ MORE</a></button>
                </div>
                    
                <div className="blogs-column">
                    <a href="/">
                        <img src="https://st2.depositphotos.com/3258807/6817/i/950/depositphotos_68173345-stock-photo-car-mechanics-at-the-service.jpg" className="blogs-image" alt="Blog"/>
                    </a>
                    <br/><br/>
                    <h5 className="blogs-title">
                        <a href="/">Budget-Friendly Design Ideas to Transform Your Office</a>
                    </h5>
                    <br/>
                    <span><i className="blogs-span"></i> Mar 23, 2022</span>
                    <span><i className="blogs-span"></i> 24 Comment</span>
                    <br/><br/>
                    <p className="blogs-text">
                        Create a workspace your team will love with these money-saving
                        interior Ui/Ux design tips Learn how People.
                    </p>
                    <button className="blogs-button"><a className="blogs-a" href="/">READ MORE</a></button>
                </div>

                <div className="blogs-column">
                    <a href="/">
                        <img src="https://media.istockphoto.com/id/1191779828/photo/young-happy-couple-talking-to-car-mechanic-in-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=s0Ox-TwXdPAsen9IVL32fvZJ0iF6t0BeQrjRJfDRAbE=" className="blogs-image" alt="Blog"/>
                    </a>
                    <br/><br/>
                    <h5 className="blogs-title">
                        <a href="/">Budget-Friendly Design Ideas to Transform Your Office</a>
                    </h5>
                    <br/>
                    <span><i className="blogs-span"></i> Mar 23, 2022</span>
                    <span><i className="blogs-span"></i> 24 Comment</span>
                    <br/><br/>
                    <p className="blogs-text">
                        Create a workspace your team will love with these money-saving
                        interior Ui/Ux design tips Learn how People.
                    </p>
                    <button className="blogs-button"><a className="blogs-a" href="/">READ MORE</a></button>
                </div>
            </div>        
        </div>
    )
}

export default Blogs;