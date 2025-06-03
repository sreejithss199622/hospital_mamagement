


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/login/", formData);

//       if (response.status === 200) {
//         localStorage.setItem("userId", response.data.user_id); // Store user ID
//         localStorage.setItem("token", response.data.token); // Store token

//         // alert("Login successful!");
//         navigate("/doctorlist"); 
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || "Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ background: "linear-gradient(to right, #74ebd5, #acb6e5)", minHeight: "100vh" }}>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#003366" }}>
//         <div className="container">
//           <a className="navbar-brand text-white" href="/"> medicare Hospital </a>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button className="btn btn-light mx-2" onClick={() => navigate("/")}>
//                   Home
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-success mx-2" onClick={() => navigate("/register")}>
//                   Sign Up
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Login Container */}
//       <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
//         <div className="col-md-4">
//           <div className="card shadow-lg p-4" style={{ backgroundColor: "#ffffffcc", borderRadius: "10px" }}>
//             <h2 className="text-center mb-4 text-dark">Login</h2>
//             {error && <p className="text-danger text-center">{error}</p>}
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="text-dark"><strong>Email:</strong></label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="text-dark"><strong>Password:</strong></label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>

//             {/* Register Link */}
//             <p className="text-center mt-3">
//               Don't have an account?{" "}
//               <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/register")}>
//                 Register
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", formData);

      if (response.status === 200) {
        localStorage.setItem("userId", response.data.user_id);
        localStorage.setItem("token", response.data.token);

        navigate("/doctorlist");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "linear-gradient(to right, #74ebd5, #acb6e5)", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003366" }}>
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            <i className="bi bi-hospital"></i> MediCare Hospital
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-light mx-2" onClick={() => navigate("/")}>
                  <i className="bi bi-house-door"></i> Home
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-success mx-2" onClick={() => navigate("/register")}>
                  <i className="bi bi-person-plus"></i> Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Container */}
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
        <div className="col-md-4">
          <div className="card shadow-lg p-4" style={{ backgroundColor: "#ffffffcc", borderRadius: "10px" }}>
            <h2 className="text-center mb-4 text-dark">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </h2>
            {error && <p className="text-danger text-center"><i className="bi bi-exclamation-circle"></i> {error}</p>}
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-3">
                <label className="text-dark"><strong>Email:</strong></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password Field with Toggle Icon */}
              <div className="mb-3">
                <label className="text-dark"><strong>Password:</strong></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-lock"></i></span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? (
                  <>
                    <i className="bi bi-arrow-clockwise"></i> Logging in...
                  </>
                ) : (
                  <>
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </>
                )}
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center mt-3">
              <i className="bi bi-person-circle"></i> Don't have an account?{" "}
              <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/register")}>
                Register <i className="bi bi-arrow-right"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;






