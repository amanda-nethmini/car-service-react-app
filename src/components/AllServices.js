import React, {useEffect, useState} from "react";
import "../styles/AllServices.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

function AllServices() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const apiUrl = `https://react-car-service-app-default-rtdb.firebaseio.com/services.json`;
        axios.get(apiUrl).then((response) => {
            if(response.data){
                setServices(Object.values(response.data));
            }
        });
    });

    return(
        <div>
            <Header/>
            <h1 className="services-heading">Our Services</h1>
            <Link to ="/addservice"><button className="services-button1">+ Add New Service</button></Link>
            <br/><br/><br/>
            {services && services.map((service , index) => (
            <div className="services-column">
                    <a href="/">
                        <img src={service.url} className="services-image" alt="Blog"/>
                    </a>
                    <br/><br/>
                    <h5 className="services-title">{service.name} ( Rs.{service.price}.00 )</h5>
                    <br/>
                    <p className="services-p">{service.description}</p>
                    <br/>
                    <button className="services-button"><a className="services-a" href="/bookservice">Book {service.name}</a></button>
                <br/><br/><br/><br/>
            </div>))}        
        </div>
    )
}

export default AllServices;