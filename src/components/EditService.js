import React from "react";
import "../styles/EditService.css";
import Header from "./Header";

function EditService() {

    return (
        <div>
            <Header/>
            <br/>
            <h1 className="editservice-h1">Edit Service Details</h1>
            <br/>
            <div className="editservice-container">
                <ul>
                    <li className="editservice-list">
                        <label className="editservice-label">Name</label>
                        <br/><br/>
                        <input className="editservice-box" type="text" placeholder="  John Doe"/>
                        <br/><br/>
                    </li>
                    
                    <li className="editservice-list">
                        <label className="editservice-label" style={{marginLeft:50}}>Description</label>
                        <br/><br/>
                        <input className="editservice-box" style={{marginLeft:50}} type="text" placeholder="  Lorem ipsum dolor scing elit"/>
                        <br/><br/>
                    </li>

                    <br/>

                    <li className="editservice-list">
                        <label className="editservice-label">Price</label>
                        <br/><br/>
                        <input className="editservice-box" type="number" placeholder="  300.00"/>
                        <br/><br/>
                    </li>
                    
                    <li className="editservice-list">
                        <label className="editservice-label" style={{marginLeft:50}}>Image URL</label>
                        <br/><br/>
                        <input className="editservice-box" style={{marginLeft:50}} type="text" placeholder="  http://image/pngbasBWt"/>
                        <br/><br/>
                    </li>
                    
                    <br/>

                    <br/><br/>

                    <button className="editservice-button" type="submit">Edit Service</button> 
                    <button className="editservicereset-button" style={{marginLeft:50}} type="submit">Delete Service</button>
                    <br/>
                </ul>
            </div>
        </div>
    )
 
}

export default EditService;