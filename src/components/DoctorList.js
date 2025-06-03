

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const DoctorList = () => {
//     const [doctors, setDoctors] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchDoctors();
//     }, []);

//     const fetchDoctors = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:8000/api/doctors/");
//             setDoctors(response.data);
//         } catch (error) {
//             console.error("Error fetching doctors:", error);
//         }
//     };

//     const handleBookAppointment = (doctor) => {
//         navigate(`/bookappointment/${doctor.id}`);
//     };

//     return (
//         <div style={{
//             background: "url('https://www.itl.cat/pngfile/big/143-1437949_hospital-wallpaper-hospital-wallpaper-hd.jpg') no-repeat center center/cover",
//             minHeight: "100vh",
//             display: "flex",
//             flexDirection: "column",
//             paddingBottom: "50px"
//         }}>
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg" style={{
//                 backgroundColor: "rgba(0, 51, 102, 0.9)",
//                 padding: "10px 0"
//             }}>
//                 <div className="container">
//                     <a className="navbar-brand text-white" href="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
//                         MediCare Hospital
//                     </a>
//                     <div className="collapse navbar-collapse">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item">
//                                 <button className="btn btn-warning mx-2"
//                                     style={{ transition: "0.3s", fontWeight: "bold" }}
//                                     onMouseOver={(e) => e.target.style.backgroundColor = "#e0a800"}
//                                     onMouseOut={(e) => e.target.style.backgroundColor = ""}
//                                     onClick={() => navigate("/myappointments")}>
//                                     My Appointments
//                                 </button>
//                             </li>
//                             <li className="nav-item">
//                                 <button className="btn btn-success mx-2"
//                                     style={{ transition: "0.3s", fontWeight: "bold" }}
//                                     onMouseOver={(e) => e.target.style.backgroundColor = "#28a745"}
//                                     onMouseOut={(e) => e.target.style.backgroundColor = ""}
//                                     onClick={() => navigate("/profile")}>
//                                     My Profile
//                                 </button>
//                             </li>
//                             <li className="nav-item">
//                                 <button className="btn btn-danger mx-2"
//                                     style={{ transition: "0.3s", fontWeight: "bold" }}
//                                     onMouseOver={(e) => e.target.style.backgroundColor = "#b30000"}
//                                     onMouseOut={(e) => e.target.style.backgroundColor = ""}
//                                     onClick={() => {
//                                         localStorage.removeItem("authToken");
//                                         navigate("/login");
//                                     }}>
//                                     Logout
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Doctor List Section */}
//             <div className="container mt-4">
//                 <h2 className="text-center" style={{
//                     color: "#fff",
//                     fontSize: "2rem",
//                     fontWeight: "bold",
//                     textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"
//                 }}>Our Doctor's </h2>

//                 <div className="row">
//                     {doctors.map((doctor) => (
//                         <div key={doctor.id} className="col-md-4 mb-4">
//                             <div className="shadow-lg" style={{
//                                 background: "#fff",  // Changed to solid white
//                                 borderRadius: "15px",
//                                 padding: "20px",
//                                 textAlign: "center",
//                                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                                 transition: "0.3s"
//                             }} 
//                             onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
//                             onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
//                             >
//                                 <img 
//                                     src={`http://127.0.0.1:8000${doctor.image}`} 
//                                     alt={doctor.name}
//                                     style={{
//                                         width: "100%",
//                                         height: "250px",
//                                         objectFit: "cover",
//                                         borderRadius: "10px"
//                                     }}
//                                 />
//                                 <div style={{ color: "#333", marginTop: "15px" }}>
//                                     <h5 style={{
//                                         color: "#003366",  // Dark blue for hospital theme
//                                         fontSize: "1.5rem",
//                                         fontWeight: "bold"
//                                     }}>{doctor.name}</h5>
//                                     <p><strong>Department:</strong> {doctor.department}</p>
//                                     <p><strong>Experience:</strong> {doctor.experience} years</p>
//                                     <button className="btn btn-primary w-100"
//                                         style={{
//                                             backgroundColor: "#0046a3",
//                                             color: "white",
//                                             border: "none",
//                                             padding: "10px 15px",
//                                             borderRadius: "5px",
//                                             fontWeight: "bold",
//                                             transition: "0.3s"
//                                         }}
//                                         onMouseOver={(e) => e.target.style.backgroundColor = "#003366"}
//                                         onMouseOut={(e) => e.target.style.backgroundColor = "#0046a3"}
//                                         onClick={() => handleBookAppointment(doctor)}>
//                                         Book Appointment
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DoctorList;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are included

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/doctors/");
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    const handleBookAppointment = (doctor) => {
        navigate(`/bookappointment/${doctor.id}`);
    };

    return (
        <div style={{
            background: "url('https://wallpapers.com/images/featured/doctor-motivation-b5wjlwe5wjikoj7t.jpg') no-repeat center center/cover",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "50px"
        }}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg" style={{
                backgroundColor: "rgba(0, 51, 102, 0.9)",
                padding: "10px 0"
            }}>
                <div className="container">
                    <a className="navbar-brand text-white" href="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                        <i className="bi bi-hospital"></i> MediCare Hospital
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="btn btn-warning mx-2"
                                    style={{ fontWeight: "bold" }}
                                    onClick={() => navigate("/myappointments")}>
                                    <i className="bi bi-calendar-check"></i> My Appointments
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-success mx-2"
                                    style={{ fontWeight: "bold" }}
                                    onClick={() => navigate("/profile")}>
                                    <i className="bi bi-person-circle"></i> My Profile
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger mx-2"
                                    style={{ fontWeight: "bold" }}
                                    onClick={() => {
                                        localStorage.removeItem("authToken");
                                        navigate("/login");
                                    }}>
                                    <i className="bi bi-box-arrow-right"></i> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Doctor List Section */}
            <div className="container mt-4">
                <h2 className="text-center text-white" style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"
                }}>
                    <i className="bi bi-person-lines-fill"></i> Our Doctors
                </h2>

                <div className="row mt-3">
                    {doctors.map((doctor) => (
                        <div key={doctor.id} className="col-md-4 mb-4">
                            <div className="shadow-lg" style={{
                                background: "#fff",
                                borderRadius: "15px",
                                padding: "20px",
                                textAlign: "center",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                transition: "0.3s"
                            }} 
                            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                                <img 
                                    src={`http://127.0.0.1:8000${doctor.image}`} 
                                    alt={doctor.name}
                                    style={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover",
                                        borderRadius: "10px"
                                    }}
                                />
                                <div style={{ color: "#333", marginTop: "15px" }}>
                                    <h5 style={{
                                        color: "#003366",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold"
                                    }}>
                                        <i className="bi bi-person-badge"></i> {doctor.name}
                                    </h5>
                                    <p>
                                        <i className="bi bi-building"></i> <strong>Department:</strong> {doctor.department}
                                    </p>
                                    <p>
                                        <i className="bi bi-award"></i> <strong>Experience:</strong> {doctor.experience} years
                                    </p>
                                    <button className="btn btn-primary w-100"
                                        style={{
                                            backgroundColor: "#0046a3",
                                            color: "white",
                                            border: "none",
                                            padding: "10px 15px",
                                            borderRadius: "5px",
                                            fontWeight: "bold",
                                            transition: "0.3s"
                                        }}
                                        onMouseOver={(e) => e.target.style.backgroundColor = "#003366"}
                                        onMouseOut={(e) => e.target.style.backgroundColor = "#0046a3"}
                                        onClick={() => handleBookAppointment(doctor)}>
                                        <i className="bi bi-calendar-plus"></i> Book Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorList;


