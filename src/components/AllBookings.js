import React, { useEffect, useState } from "react";
import "../styles/AllBookings.css";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import Header from "./Header";
import axios from "axios";

function AllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const apiUrl = `https://react-car-service-app-default-rtdb.firebaseio.com/bookings.json`;
    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setBookings(Object.values(response.data));
      }
    });
  });

  return (
    <div>
      <Header />
      <h1 className="allbookings-heading">All Bookings</h1>
      <br/>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Name</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings &&
            bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>

                <td>
                  {" "}
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    href="#"
                  >
                    {booking.name}{" "}
                  </a>
                </td>

                <td>{booking.phone}</td>
                
                <td>
                    <a>
                    <button
                      //id={bookigId}
                      //onClick={(e) => deleteTable(e)}
                      className="btn btn-danger"
                    >
                      {" "}
                      Delete
                    </button>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AllBookings;
