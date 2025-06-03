


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const MyAppointments = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [error, setError] = useState("");
    const [filterType, setFilterType] = useState("today");

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            setError("User not found. Please log in again.");
            return;
        }

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/myappointment/?userid=${userId}`);
            console.log("API Response:", response.data); // Debugging API response
            setAppointments(response.data);
            filterAppointments(response.data, "today"); // Default filter
        } catch (error) {
            console.error("Error fetching appointments:", error);
            setError("Failed to load appointments. Please try again.");
        }
    };

    const filterAppointments = (allAppointments, type) => {
        const today = new Date().toISOString().split("T")[0];

        let filtered = [];
        if (type === "today") {
            filtered = allAppointments.filter(appt => appt.date === today);
        } else if (type === "upcoming") {
            filtered = allAppointments.filter(appt => appt.date > today);
        } else if (type === "previous") {
            filtered = allAppointments.filter(appt => appt.date < today);
        }

        setFilteredAppointments(filtered);
        setFilterType(type);
    };

    return (
        <div style={{ background: "linear-gradient(to right, #003366, #004080, #00509e)", minHeight: "100vh", paddingBottom: "30px" }}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#002147" }}>
                <div className="container">
                    <a className="navbar-brand text-white" href="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                        <i className="bi bi-hospital"></i> Medicare Hospital
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="btn btn-info mx-2" onClick={() => navigate("/doctorlist")}>
                                    <i className="bi bi-person-lines-fill"></i> Doctor List
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-success mx-2" onClick={() => navigate("/profile")}>
                                    <i className="bi bi-person-circle"></i> My Profile
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger mx-2" onClick={() => {
                                    localStorage.removeItem("authToken");
                                    localStorage.removeItem("userId");
                                    navigate("/login");
                                }}>
                                    <i className="bi bi-box-arrow-right"></i> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Appointments Section */}
            <div className="container mt-4">
                <h2 className="text-center text-white mb-4">
                    <i className="bi bi-calendar-check"></i> My Appointments
                </h2>
                {error && <p className="text-danger text-center">{error}</p>}

                {/* Filter Buttons */}
                <div className="d-flex justify-content-center mb-4">
                    <button 
                        className={`btn mx-2 ${filterType === "today" ? "btn-primary" : "btn-outline-primary"}`} 
                        onClick={() => filterAppointments(appointments, "today")}
                    >
                        <i className="bi bi-calendar-day"></i> Today's Appointments
                    </button>
                    <button 
                        className={`btn mx-2 ${filterType === "upcoming" ? "btn-success" : "btn-outline-success"}`} 
                        onClick={() => filterAppointments(appointments, "upcoming")}
                    >
                        <i className="bi bi-calendar-week"></i> Upcoming Appointments
                    </button>
                    <button 
                        className={`btn mx-2 ${filterType === "previous" ? "btn-warning" : "btn-outline-warning"}`} 
                        onClick={() => filterAppointments(appointments, "previous")}
                    >
                        <i className="bi bi-calendar-x"></i> Previous Appointments
                    </button>
                </div>

                {/* Appointment Cards */}
                <div className="row">
                    {filteredAppointments.length > 0 ? (
                        filteredAppointments.map((appointment) => (
                            <div key={appointment.id} className="col-md-4 mb-4">
                                <div className="card shadow-lg border-0"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.2)",
                                        borderRadius: "15px",
                                        transition: "0.3s",
                                        cursor: "pointer",
                                        color: "#fff",
                                        textAlign: "center",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title text-white">
                                            <i className="bi bi-person-fill"></i> {appointment.doctor?.name || "Doctor Name Not Available"}
                                        </h5>
                                        <p className="card-text">
                                            <i className="bi bi-briefcase"></i> <strong>Department:</strong> {appointment.doctor?.department || "Unknown"}
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-calendar-event"></i> <strong>Date:</strong> {appointment.date}
                                        </p>
                                        <p className="card-text">
                                            <i className="bi bi-clock"></i> <strong>Time:</strong> {appointment.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-white"><i className="bi bi-exclamation-circle"></i> No appointments found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;















