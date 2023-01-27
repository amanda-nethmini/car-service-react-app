import React, {useState} from "react";
import "../styles/BookService.css";
import Header from "./Header";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import axios from "axios";
import { v4 as uuid4 } from "uuid";
import { Link } from "react-router-dom";

function BookService() {

    const [message, setMessage] = useState("");

    const initialValues = {
        name: '',
        phone: '',
        cno: '',
        date: '',
        cvv: '',
    };

    const onSubmit = (values, {resetForm}) => {
        const bookingId = uuid4();
        const apiUrl = `https://react-car-service-app-default-rtdb.firebaseio.com/bookings/${bookingId}.json`;
        const booking = {...values, id: bookingId };
        axios.put(apiUrl, booking).then((response) => {
            if(response.status=200){
                setMessage("Your booking is completed !");
                resetForm({values: ""});
            }
        }).catch((error) => {
            setMessage("There was an error!");
        });
    };
    
    const validate = (values) => {
        let errors = {};
    
        if(!values.name){
                errors.name = "Name cannot be blank !";
        }

        if(!values.phone){
            errors.phone = "Phone number cannot be blank !";
        }

        if(!values.cno){
            errors.cno = "Card number cannot be blank !";
        }

        if(!values.date){
            errors.date = "Expire date cannot be blank !";
        }

        if(!values.cvv){
            errors.cvv = "Cvv cannot be blank !";
        }
        return errors;
    };
    
    const formik = useFormik ({
        initialValues,
        onSubmit,
        validate,
    });
        
    return (
        <div>
            <Header/>
            <Form onSubmit={formik.handleSubmit}>
            <h1 className="bookservice-h1">Service Booking</h1>
            <br/>
            {message ? <div className="alert alert-primary mt-4">{message} Click here to see<Link to="/allbookings"> all bookings</Link></div> : null}
            <br/>
            <div className="bookservice-container">
                <ul>
                    <li className="bookservice-list">
                        <label className="bookservice-label">Name</label>
                        <br/><br/>
                        <input className="bookservice-box" 
                            type="text" 
                            placeholder="  Enter Name" 
                            name="name" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="small text-danger">{formik.errors.name}</div>
                        ) : null}
                    </li>

                    <br/><br/>
                    
                    <li className="bookservice-list">
                        <label className="bookservice-label">Phone Number</label>
                        <br/><br/>
                        <input className="bookservice-box"
                            type="number" 
                            placeholder="  Enter Phone Number" 
                            name="phone" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="small text-danger">{formik.errors.phone}</div>
                        ) : null}
                    </li>

                    <br/><br/>

                    <li className="bookservice-list">
                        <label className="bookservice-label">Card Number</label>
                        <br/><br/>
                        <input className="bookservice-box" 
                            type="number" 
                            placeholder="  Enter Card Number" 
                            name="cno" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cno}
                        />
                        {formik.touched.cno && formik.errors.cno ? (
                            <div className="small text-danger">{formik.errors.cno}</div>
                        ) : null}
                    </li>

                    <br/><br/>
                    
                    <li className="bookservice-list">
                        <label className="bookservice-label">Expiry Date</label>
                        <br/><br/>
                        <input className="bookservice-box" 
                            type="text" 
                            placeholder="  dd/yy" 
                            name="date" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date}
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <div className="small text-danger">{formik.errors.date}</div>
                        ) : null}
                    </li>
                    
                    <br/><br/>
                    
                    <li className="bookservice-list">
                        <label className="bookservice-label">Cvv</label>
                        <br/><br/>
                        <input className="bookservice-box" 
                            type="password" 
                            placeholder=" 000" 
                            name="cvv" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cvv}
                        />
                        {formik.touched.cvv && formik.errors.cvv ? (
                            <div className="small text-danger">{formik.errors.cvv}</div>
                        ) : null}
                    </li>

                    <br/><br/><br/>
                    <button className="bookservice-button">  Proceed to Pay</button>
                    <br/>
                </ul>
            </div>
            </Form>
        </div>
    )
 
}

export default BookService;