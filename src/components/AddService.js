import React, {useState} from "react";
import "../styles/AddService.css";
import Header from "./Header";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import axios from "axios";
import { v4 as uuid4 } from "uuid";
import { Link } from "react-router-dom";

function AddService() {

    const [message, setMessage] = useState("");

    const initialValues = {
        name: '',
        description: '',
        price: '',
        url: '',
    };

    const onSubmit = (values, {resetForm}) => {
        const serviceId = uuid4();
        const apiUrl = `https://react-car-service-app-default-rtdb.firebaseio.com/services/${serviceId}.json`;
        const service = {...values, id: serviceId };
        axios.put(apiUrl, service).then((response) => {
            if(response.status=200){
                setMessage("Service added successfully");
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

            if(!values.description){
                errors.description = "Description cannot be blank !";
            }

            if(!values.price){
                errors.price = "Price cannot be blank !";
            }

            if(!values.url){
                errors.url = "Url cannot be blank !";
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
            <h1 className="addservice-h1">Add New Service</h1>
            <br/>
            {message ? <div className="alert alert-primary mt-4">{message} ! Click here to see<Link to="/allservices"> all services</Link></div> : null}
            <br/>
            <div className="addservice-container">
                <ul>
                    <li className="addservice-list">
                        <label className="addservice-label">Name</label>
                        <br/>
                        <input className="addservice-box" 
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
                    
                    <li className="addservice-list">
                        <label className="addservice-label">Description</label>
                        <br/>
                        <input className="addservice-box"
                            type="text" 
                            placeholder="  Enter Description" 
                            name="description" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                        {formik.touched.description && formik.errors.description ? (
                            <div className="small text-danger">{formik.errors.description}</div>
                        ) : null}
                    </li>

                    <br/><br/>

                    <li className="addservice-list">
                        <label className="addservice-label">Price</label>
                        <br/>
                        <input className="addservice-box" 
                            type="number" 
                            placeholder="  Enter Price" 
                            name="price" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <div className="small text-danger">{formik.errors.price}</div>
                        ) : null}
                    </li>

                    <br/><br/>
                    
                    <li className="addservice-list">
                        <label className="addservice-label">Image URL</label>
                        <br/>
                        <input className="addservice-box" 
                            type="text" 
                            placeholder="  Image URL" 
                            name="url" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.url}
                        />
                        {formik.touched.url && formik.errors.url ? (
                            <div className="small text-danger">{formik.errors.url}</div>
                        ) : null}
                    </li>
                    
                    <br/><br/><br/>
                    <button className="addservice-button">+ Add Service</button>
                    <br/>
                </ul>
            </div>
            </Form>
        </div>
    )
 
}

export default AddService;