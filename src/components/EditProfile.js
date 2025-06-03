


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

// const EditProfile = () => {
//     const navigate = useNavigate();
//     const [profile, setProfile] = useState({
//         name: "",
//         email: "",
//         age: "",
//         gender: "",
//         contact: "",
//         address: "",
//     });

//     const [error, setError] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");

//     useEffect(() => {
//         fetchUserProfile();
//     }, []);

//     const fetchUserProfile = async () => {
//         const userId = localStorage.getItem("userId");
//         if (!userId) {
//             setError("User not found. Please log in again.");
//             return;
//         }

//         try {
//             const response = await axios.get(`http://127.0.0.1:8000/api/profile/${userId}/`);
//             setProfile(response.data);
//         } catch (error) {
//             console.error("Error fetching profile:", error);
//             setError("Failed to load profile. Please try again.");
//         }
//     };

//     const handleChange = (e) => {
//         setProfile({ ...profile, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const userId = localStorage.getItem("userId");

//         try {
//             const response = await axios.put(
//                 `http://127.0.0.1:8000/api/profile/${userId}/`,
//                 profile,
//                 { headers: { "Content-Type": "application/json" } }
//             );

//             if (response.status === 200) {
//                 setSuccessMessage("Profile updated successfully!");
//                 setTimeout(() => navigate("/profile"), 1500);
//             }
//         } catch (error) {
//             console.error("Error updating profile:", error);
//             setError("Failed to update profile. Please try again.");
//         }
//     };

//     return (



//         <div style={{ background: "linear-gradient(to right, #2c3e50, #4ca1af)", minHeight: "100vh", paddingBottom: "50px" }}>
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#002147", padding: "15px" }}>
//                 <div className="container">
//                     <a className="navbar-brand text-white fw-bold" href="/" style={{ fontSize: "1.5rem" }}>
//                         <i className="bi bi-hospital"></i> Medicare Hospital
//                     </a>
//                     <div className="collapse navbar-collapse">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item">
//                                 <button className="btn btn-outline-light mx-2" onClick={() => navigate("/profile")}>
//                                     <i className="bi bi-person-circle"></i> My Profile
//                                 </button>
//                             </li>
//                             <li className="nav-item">
//                                 <button className="btn btn-primary mx-2" onClick={() => navigate("/myappointments")}>
//                                     <i className="bi bi-calendar-check"></i> My Appointments
//                                 </button>
//                             </li>
//                             <li className="nav-item">
//                                 <button className="btn btn-success mx-2" onClick={() => navigate("/doctorlist")}>
//                                     <i className="bi bi-person-lines-fill"></i> Doctor List
//                                 </button>
//                             </li>
//                             <li className="nav-item">
//                                 <button className="btn btn-danger mx-2" onClick={() => { localStorage.clear(); navigate("/login"); }}>
//                                     <i className="bi bi-box-arrow-right"></i> Logout
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Edit Profile Section */}
//             <div className="container mt-5">
//                 <h2 className="text-center text-white fw-bold">
//                     <i className="bi bi-pencil-square"></i> Edit Profile
//                 </h2>
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <div className="card shadow-lg p-4"
//                              style={{
//                                  backdropFilter: "blur(10px)",
//                                  background: "rgba(255, 255, 255, 0.15)",
//                                  borderRadius: "15px",
//                                  color: "#fff",
//                                  textAlign: "center",
//                                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
//                              }}>
//                             <div className="card-body">
//                                 {error && <p className="alert alert-danger"><i className="bi bi-exclamation-triangle"></i> {error}</p>}
//                                 {successMessage && <p className="alert alert-success"><i className="bi bi-check-circle"></i> {successMessage}</p>}

//                                 <form onSubmit={handleSubmit}>
//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold"><i className="bi bi-person-fill"></i> Name:</label>
//                                         <input type="text" className="form-control" value={profile.name} readOnly />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold"><i className="bi bi-envelope-fill"></i> Email:</label>
//                                         <input type="email" name="email" className="form-control" value={profile.email} onChange={handleChange} required />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold"><i className="bi bi-calendar"></i> Age:</label>
//                                         <input type="number" name="age" className="form-control" value={profile.age} onChange={handleChange} required />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold"><i className="bi bi-gender-ambiguous"></i> Gender:</label>
//                                         <select name="gender" className="form-control" value={profile.gender} onChange={handleChange} required>
//                                             <option value="">Select Gender</option>
//                                             <option value="Male">Male</option>
//                                             <option value="Female">Female</option>
//                                             <option value="Other">Other</option>
//                                         </select>
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold"><i className="bi bi-telephone-fill"></i> Contact:</label>
//                                         <input type="text" name="contact" className="form-control" value={profile.contact} onChange={handleChange} required />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label className="form-label fw-bold"><i className="bi bi-house-door-fill"></i> Address:</label>
//                                         <input type="text" name="address" className="form-control" value={profile.address} onChange={handleChange} required />
//                                     </div>

//                                     <button type="submit" className="btn btn-primary w-100 fw-bold"
//                                             style={{ transition: "0.3s" }}
//                                             onMouseOver={(e) => e.target.style.backgroundColor = "#0046a3"}
//                                             onMouseOut={(e) => e.target.style.backgroundColor = ""}>
//                                         <i className="bi bi-check-lg"></i> Update Profile
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditProfile;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const EditProfile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        contact: "",
        address: "",
    });

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            setError("User not found. Please log in again.");
            return;
        }

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/profile/${userId}/`);
            setProfile(response.data);
        } catch (error) {
            console.error("Error fetching profile:", error);
            setError("Failed to load profile. Please try again.");
        }
    };

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem("userId");

        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/api/profile/${userId}/`,
                profile,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                setSuccessMessage("Profile updated successfully!");
                setTimeout(() => navigate("/profile"), 1500);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            setError("Failed to update profile. Please try again.");
        }
    };

    return (
        <div
            style={{
                background: "url('https://wallpapers.com/images/hd/profile-background-ep0rjaotterh7xjq.jpg') no-repeat center center/cover",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "70px", // Ensures content doesn't overlap with navbar
            }}
        >
            {/* Navbar - Fixed at the Top */}
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    backgroundColor: "#002147",
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    zIndex: 1000,
                }}
            >
                <div className="container">
                    <a className="navbar-brand text-white fw-bold" href="/" style={{ fontSize: "1.5rem" }}>
                        <i className="bi bi-hospital"></i> Medicare Hospital
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="btn btn-outline-light mx-2" onClick={() => navigate("/profile")}>
                                    <i className="bi bi-person-circle"></i> My Profile
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary mx-2" onClick={() => navigate("/myappointments")}>
                                    <i className="bi bi-calendar-check"></i> My Appointments
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-success mx-2" onClick={() => navigate("/doctorlist")}>
                                    <i className="bi bi-person-lines-fill"></i> Doctor List
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger mx-2" onClick={() => { localStorage.clear(); navigate("/login"); }}>
                                    <i className="bi bi-box-arrow-right"></i> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Edit Profile Form - Centered */}
            <div className="container">
                <h2 className="text-center text-white fw-bold mb-4">
                    <i className="bi bi-pencil-square"></i> Edit Profile
                </h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg p-4"
                             style={{
                                 backdropFilter: "blur(10px)",
                                 background: "rgba(255, 255, 255, 0.15)",
                                 borderRadius: "15px",
                                 color: "#fff",
                                 textAlign: "center",
                                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
                             }}>
                            <div className="card-body">
                                {error && <p className="alert alert-danger"><i className="bi bi-exclamation-triangle"></i> {error}</p>}
                                {successMessage && <p className="alert alert-success"><i className="bi bi-check-circle"></i> {successMessage}</p>}

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* Name (Read-only) */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold"><i className="bi bi-person-fill"></i> Name:</label>
                                            <input type="text" className="form-control" value={profile.name} readOnly />
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold"><i className="bi bi-envelope-fill"></i> Email:</label>
                                            <input type="email" name="email" className="form-control" value={profile.email} onChange={handleChange} required />
                                        </div>

                                        {/* Age */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold"><i className="bi bi-calendar"></i> Age:</label>
                                            <input type="number" name="age" className="form-control" value={profile.age} onChange={handleChange} required />
                                        </div>

                                        {/* Gender */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold"><i className="bi bi-gender-ambiguous"></i> Gender:</label>
                                            <select name="gender" className="form-control" value={profile.gender} onChange={handleChange} required>
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        {/* Contact */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold"><i className="bi bi-telephone-fill"></i> Contact:</label>
                                            <input type="text" name="contact" className="form-control" value={profile.contact} onChange={handleChange} required />
                                        </div>

                                        {/* Address */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold"><i className="bi bi-house-door-fill"></i> Address:</label>
                                            <input type="text" name="address" className="form-control" value={profile.address} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 fw-bold">
                                        <i className="bi bi-check-lg"></i> Update Profile
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;









