import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Login.css";
import Header from "./Header";
import { Form } from "react-bootstrap";

function Login() {

    const navigate = useNavigate();

    const [values, setValues] = useState ({
        email: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg]=useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission=()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        
        signInWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{
            setSubmitButtonDisabled(false);
            navigate("/");
        }).catch(err=>{
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
    };

    return (
        <div>
            <Header/>
            <Form className="login-container">
                <h1 className="login-h1">Login Form</h1>
                <br/>
                <label className="login-label">E-Mail</label>
                <br/><br/>
                <input className="login-box" type="email" placeholder="  Enter E-Mail" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value}))} required/>
                <br/><br/>
                <label className="login-label">Password</label>
                <br/><br/>
                <input className="login-box" type="password" placeholder="  Enter Password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value}))} required/>
                <br/>
                <br/><br/>
                <button disabled={submitButtonDisabled} onClick={handleSubmission} className="login-button" type="submit">Login</button>
                <br/><br/>
                <p>Don't have an account? <span><Link to ="/register">Register</Link></span></p>
            </Form>
        </div>
    )
 
}

export default Login;