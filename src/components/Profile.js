


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (!userId) {
//       setError("User not found. Please log in again.");
//       setLoading(false);
//       return;
//     }

//     axios
//       .get(`http://127.0.0.1:8000/api/profile/${userId}/`)
//       .then((response) => {
//         setProfile(response.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load profile");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center mt-4 text-white">Loading...</p>;
//   if (error) return <p className="text-danger text-center mt-4">{error}</p>;

//   return (
//     <div
//       style={{
//         background: "linear-gradient(to bottom, #003366, #002147)",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         paddingBottom: "50px",
//       }}
//     >
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#003366" }}>
//         <div className="container">
//           <a className="navbar-brand text-white" href="/">
//             Medicare Hospital
//           </a>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button
//                   className="btn btn-primary mx-2"
//                   style={{ transition: "0.3s" }}
//                   onMouseOver={(e) => (e.target.style.backgroundColor = "#0046a3")}
//                   onMouseOut={(e) => (e.target.style.backgroundColor = "")}
//                   onClick={() => navigate("/myappointments")}
//                 >
//                   My Appointments
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className="btn btn-info mx-2"
//                   style={{ transition: "0.3s" }}
//                   onMouseOver={(e) => (e.target.style.backgroundColor = "#0174b3")}
//                   onMouseOut={(e) => (e.target.style.backgroundColor = "")}
//                   onClick={() => navigate("/doctorlist")}
//                 >
//                   Doctor List
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className="btn btn-danger mx-2"
//                   style={{ transition: "0.3s" }}
//                   onMouseOver={(e) => (e.target.style.backgroundColor = "#b30000")}
//                   onMouseOut={(e) => (e.target.style.backgroundColor = "")}
//                   onClick={() => {
//                     localStorage.removeItem("authToken");
//                     localStorage.removeItem("userId");
//                     navigate("/login");
//                   }}
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Profile Section */}
//       <div className="container mt-5">
//         <h2 className="text-center text-white mb-4">User Profile</h2>
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div
//               className="card shadow-lg"
//               style={{
//                 background: "rgba(255, 255, 255, 0.1)",
//                 borderRadius: "15px",
//                 padding: "25px",
//                 color: "#fff",
//                 textAlign: "center",
//                 boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//                 border: "1px solid rgba(255, 255, 255, 0.2)",
//                 backdropFilter: "blur(15px)",
//               }}
//             >
//               <div className="card-body">
//                 <h4 className="card-title text-white mb-3">{profile.name}</h4>
//                 <hr style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }} />
//                 <p className="mb-2">
//                   <strong>Email:</strong> {profile.email}
//                 </p>
//                 <p className="mb-2">
//                   <strong>Age:</strong> {profile.age}
//                 </p>
//                 <p className="mb-2">
//                   <strong>Gender:</strong> {profile.gender}
//                 </p>
//                 <p className="mb-2">
//                   <strong>Contact:</strong> {profile.contact}
//                 </p>
//                 <p className="mb-2">
//                   <strong>Address:</strong> {profile.address}
//                 </p>

//                 {/* Edit Profile Button */}
//                 <div className="text-center mt-4">
//                   <button
//                     className="btn btn-warning"
//                     style={{ transition: "0.3s", color: "#000", fontWeight: "bold" }}
//                     onMouseOver={(e) => (e.target.style.backgroundColor = "#ffcc00")}
//                     onMouseOut={(e) => (e.target.style.backgroundColor = "")}
//                     onClick={() => navigate("/editprofile")}
//                   >
//                     Edit Profile
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setError("User not found. Please log in again.");
      setLoading(false);
      return;
    }

    axios
      .get(`http://127.0.0.1:8000/api/profile/${userId}/`)
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load profile");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-4 text-white">Loading...</p>;
  if (error) return <p className="text-danger text-center mt-4">{error}</p>;

  return (
    <div
      style={{
        background: "url('https://png.pngtree.com/background/20220714/original/pngtree-blue-business-technology-banner-background-picture-image_1621784.jpg') no-repeat center center/cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "70px", // Prevents profile from overlapping navbar
      }}
    >
      {/* Navbar - Stays on Top */}
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
          <a className="navbar-brand text-white" href="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            <i className="bi bi-hospital"></i> Medicare Hospital
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-primary mx-2" onClick={() => navigate("/myappointments")}>
                  <i className="bi bi-calendar-check"></i> My Appointments
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-info mx-2" onClick={() => navigate("/doctorlist")}>
                  <i className="bi bi-person-lines-fill"></i> Doctor List
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => {
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("userId");
                    navigate("/login");
                  }}
                >
                  <i className="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Card - Centered */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          padding: "30px",
          textAlign: "center",
          width: "400px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 style={{ color: "#002147", fontWeight: "bold" }}>
          <i className="bi bi-person-circle"></i> User Profile
        </h2>

        {profile.image && (
          <img
            src={profile.image}
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "15px",
              border: "3px solid #002147",
            }}
          />
        )}

        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        <p><strong>Contact:</strong> {profile.contact}</p>
        <p><strong>Address:</strong> {profile.address}</p>

        <button
          className="btn btn-warning"
          style={{ fontWeight: "bold" }}
          onClick={() => navigate("/editprofile")}
        >
          <i className="bi bi-pencil-square"></i> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;









