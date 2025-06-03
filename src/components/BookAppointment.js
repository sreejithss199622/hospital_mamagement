



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const BookAppointment = () => {
    const navigate = useNavigate();
    const { doctorId } = useParams();

    const [formData, setFormData] = useState({
        userid: localStorage.getItem("userId") || "",
        doctorid: doctorId || "",
        date: "",
        time: "",
    });

    useEffect(() => {
        if (!formData.userid) {
            alert("User not logged in. Redirecting to login.");
            navigate("/login");
        }
    }, [formData.userid, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/bookappointment/", formData);
            alert("Appointment booked successfully!");
            navigate("/myappointments");
        } catch (error) {
            alert("Failed to book appointment");
            console.error(error.response?.data || "Error occurred");
        }
    };

    return (
        <div
            style={{
                background: "url('https://plus.unsplash.com/premium_photo-1673953509986-9b2bfe934ae5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xpbmljYWx8ZW58MHx8MHx8fDA%3D') no-repeat center center/cover",
                height: "100vh", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: "80px", // Prevents content from hiding behind the navbar
            }}
        >
            {/* Navbar - Fixed at the top */}
            <nav style={{
                backgroundColor: "#003366",
                padding: "15px",
                width: "100%",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "1000",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)"
            }}>
                <a href="/" style={{ color: "white", fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>
                    <i className="bi bi-hospital"></i> Medicare Hospital
                </a>
                <div>
                    <button
                        style={{ margin: "5px", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer", background: "#ffc107", color: "#000" }}
                        onClick={() => navigate("/myappointments")}
                    >
                        <i className="bi bi-calendar-check"></i> My Appointments
                    </button>
                    <button
                        style={{ margin: "5px", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer", background: "#28a745", color: "#fff" }}
                        onClick={() => navigate("/profile")}
                    >
                        <i className="bi bi-person-circle"></i> My Profile
                    </button>
                    <button
                        style={{ margin: "5px", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer", background: "#dc3545", color: "#fff" }}
                        onClick={() => {
                            localStorage.removeItem("authToken");
                            localStorage.removeItem("userId");
                            navigate("/login");
                        }}
                    >
                        <i className="bi bi-box-arrow-right"></i> Logout
                    </button>
                </div>
            </nav>

            {/* Appointment Form - Centered */}
            <div
                style={{
                    maxWidth: "450px",
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                }}
            >
                <h2 style={{ color: "#003366", fontWeight: "bold" }}>
                    <i className="bi bi-calendar-plus"></i> Book Appointment
                </h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", fontWeight: "bold" }}>
                            <i className="bi bi-person-badge"></i> User ID
                        </label>
                        <input type="text" name="userid" value={formData.userid} readOnly style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", fontWeight: "bold" }}>
                            <i className="bi bi-person"></i> Doctor ID
                        </label>
                        <input type="text" name="doctorid" value={formData.doctorid} readOnly style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", fontWeight: "bold" }}>
                            <i className="bi bi-calendar-event"></i> Date
                        </label>
                        <input type="date" name="date" onChange={handleChange} required style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", fontWeight: "bold" }}>
                            <i className="bi bi-clock"></i> Time
                        </label>
                        <input type="time" name="time" onChange={handleChange} required style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#007bff",
                                color: "#fff",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                                flex: "1",
                                marginRight: "5px",
                            }}
                        >
                            <i className="bi bi-check-circle"></i> Confirm
                        </button>
                        <button
                            type="button"
                            style={{
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                                flex: "1",
                            }}
                            onClick={() => navigate("/doctorlist")}
                        >
                            <i className="bi bi-x-circle"></i> Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;

































