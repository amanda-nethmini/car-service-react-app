import React from "react";
import "../styles/Home.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

function Home(props) {

    return (
        <div>
            <Header/>
            <img src="https://img.freepik.com/premium-vector/car-service-repair_333239-151.jpg?w=2000" className="home-image" alt="Blog"/>
            <div className="home-container">
                <br/><br/><br/>
                <h2>{props.name ? `Welcome - ${props.name}` : "Login Please !"}</h2>
                <br/>
                <h5>Sign Out From Here <span><Link to ="/" onClick={signOut}>signout</Link></span></h5>
            </div>
        </div>
    )
 
}

export default Home;