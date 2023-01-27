import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Experts from "./components/Experts";
import AllServices from "./components/AllServices";
import AddService from "./components/AddService";
import EditService from "./components/EditService";
import Home from "./components/Home";
import { auth } from './firebase';
import BookService from "./components/BookService";
import AllBookings from './components/AllBookings';

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }else setUserName("");
    });
  }, []);

  console.log(window.location.pathname)

    return (
      <div >
        <Router>
          <Routes>
            
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Home name={userName}/>} />
            <Route path="/allservices" element={<AllServices/>} />
            <Route path="/experts" element={<Experts/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/addservice" element={<AddService/>} />
            <Route path="/bookservice" element={<BookService/>} />
            <Route path="/allbookings" element={<AllBookings/>} />

            
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
