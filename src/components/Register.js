import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import Header from "./Header";
import { auth } from "../firebase";
import { Form } from "react-bootstrap";

function Register() {

    const navigate = useNavigate();

    const [values, setValues] = useState ({
        name: "",
        email: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg]=useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Please provide all fields !");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        
        createUserWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{
            setSubmitButtonDisabled(false);
            const user=res.user;
            await updateProfile(user, {
                displayName: values.name,
            })
            navigate("/login");
        }).catch(err=>{
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
    };

    const reset = () => {
        setValues("");
    }

    return (
        <div>
            <Header/>
            <br/>
            <Form onReset={reset}>
                <h1 className="register-h1">Sign Up Form</h1>
                
                <div className="register-container">
                    <ul>
                        <li className="register-list">
                            <label className="register-label">Name</label>
                            <br/><br/>
                            <input className="register-box" type="text" placeholder="  Enter Name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value}))} required/>
                            <br/><br/>
                        </li>
                        
                        <li className="register-list">
                            <label className="register-label" style={{marginLeft:50}}>E-Mail Address</label>
                            <br/><br/>
                            <input className="register-box" style={{marginLeft:50}} type="email" placeholder="  Enter E-Mail" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value}))} required/>
                            <br/><br/>
                        </li>

                        <br/>

                        <li className="register-list">
                            <label className="register-label">Password</label>
                            <br/><br/>
                            <input className="register-box" type="password" placeholder="  Enter Password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value}))} required/>
                            <br/><br/>
                        </li>
                    
                        <br/>

                        <br/><br/>

                        <button onClick={handleSubmission} disabled={submitButtonDisabled} className="register-button" type="submit">Register</button> 
                        <button className="registerreset-button" style={{marginLeft:50}} type="reset">Reset</button>
                        <br/><br/>

                    </ul>
                    <p style={{marginLeft:35}}>Already have an account? <span><Link to ="/login">Login</Link></span></p>
                </div>
            </Form>
        </div>
    )
 
}

export default Register;