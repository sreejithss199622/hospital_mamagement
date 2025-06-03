


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     contact: "",
//     address: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset previous errors

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);

//       if (response.status === 201) {
//         alert("Registration successful!");
//         navigate("/login"); // Redirect to login page
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong!");
//     }
//   };

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#003366" }}>
//         <div className="container">
//           <a className="navbar-brand text-white" href="/">
//             <i className="bi bi-hospital"></i> MediCare Hospital
//           </a>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button className="btn btn-light mx-2" onClick={() => navigate("/")}>
//                   <i className="bi bi-house-door"></i> Home
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-success mx-2" onClick={() => navigate("/login")}>
//                   <i className="bi bi-box-arrow-in-right"></i> Login
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Register Form */}
//       <div className="container d-flex justify-content-center align-items-center flex-grow-1">
//         <div className="col-md-6"> {/* Adjusted width */}
//           <div className="card shadow-lg p-4" style={{ borderRadius: "10px" }}>
//             <h3 className="text-center mb-3">
//               <i className="bi bi-person-plus"></i> Register
//             </h3>
//             {error && <p className="text-danger text-center"><i className="bi bi-exclamation-circle"></i> {error}</p>}

//             <form onSubmit={handleSubmit}>
//               {/* Block 1: Name & Age */}
//               <div className="row mb-2">
//                 <div className="col-md-6">
//                   <label><strong>Name:</strong></label>
//                   <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//                 </div>
//                 <div className="col-md-6">
//                   <label><strong>Age:</strong></label>
//                   <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} required />
//                 </div>
//               </div>

//               {/* Block 2: Gender & Contact */}
//               <div className="row mb-2">
//                 <div className="col-md-6">
//                   <label><strong>Gender:</strong></label>
//                   <select name="gender" className="form-control" value={formData.gender} onChange={handleChange} required>
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//                 <div className="col-md-6">
//                   <label><strong>Contact:</strong></label>
//                   <input type="number" name="contact" className="form-control" value={formData.contact} onChange={handleChange} required />
//                 </div>
//               </div>

//               {/* Block 3: Address & Email */}
//               <div className="row mb-2">
//                 <div className="col-md-6">
//                   <label><strong>Address:</strong></label>
//                   <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} required />
//                 </div>
//                 <div className="col-md-6">
//                   <label><strong>Email:</strong></label>
//                   <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//                 </div>
//               </div>

//               {/* Block 4: Password & Confirm Password */}
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label><strong>Password:</strong></label>
//                   <div className="input-group">
//                     <input type={showPassword ? "text" : "password"} name="password" className="form-control" value={formData.password} onChange={handleChange} required />
//                     <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
//                       <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <label><strong>Confirm Password:</strong></label>
//                   <div className="input-group">
//                     <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
//                     <button type="button" className="btn btn-outline-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
//                       <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <button type="submit" className="btn btn-primary w-100">
//                 <i className="bi bi-person-plus"></i> Register
//               </button>
//             </form>

//             <p className="text-center mt-2">
//               Already have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Login</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if email already exists
    if (name === "email" && value) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/check-email/", { email: value });
        setEmailExists(response.data.exists);
      } catch (error) {
        setEmailExists(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (emailExists) {
      setError("Email already exists!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
                <button className="btn btn-success mx-2" onClick={() => navigate("/login")}>
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Register Form */}
      <div className="container d-flex justify-content-center align-items-center flex-grow-1">
        <div className="col-md-6">
          <div className="card shadow-lg p-4" style={{ borderRadius: "10px" }}>
            <h3 className="text-center mb-3">
              <i className="bi bi-person-plus"></i> Register
            </h3>
            {error && <p className="text-danger text-center"><i className="bi bi-exclamation-circle"></i> {error}</p>}

            <form onSubmit={handleSubmit}>
              {/* Block 1: Name & Age */}
              <div className="row mb-2">
                <div className="col-md-6">
                  <label><strong>Name:</strong></label>
                  <input type="text" name="name" className="form-control" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label><strong>Age:</strong></label>
                  <input type="number" name="age" className="form-control" placeholder="Enter your age" value={formData.age} onChange={handleChange} required />
                </div>
              </div>

              {/* Block 2: Gender & Contact */}
              <div className="row mb-2">
                <div className="col-md-6">
                  <label><strong>Gender:</strong></label>
                  <select name="gender" className="form-control" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label><strong>Contact:</strong></label>
                  <input type="number" name="contact" className="form-control" placeholder="Enter your contact number" value={formData.contact} onChange={handleChange} required />
                </div>
              </div>

              {/* Block 3: Address & Email */}
              <div className="row mb-2">
                <div className="col-md-6">
                  <label><strong>Address:</strong></label>
                  <input type="text" name="address" className="form-control" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label><strong>Email:</strong></label>
                  <input type="email" name="email" className="form-control" placeholder="Enter your email@gmail.com" value={formData.email} onChange={handleChange} required />
                  {emailExists && <small className="text-danger">Email already exists!</small>}
                </div>
              </div>

              {/* Block 4: Password & Confirm Password */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label><strong>Password:</strong></label>
                  <div className="input-group">
                    <input type={showPassword ? "text" : "password"} name="password" className="form-control" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                      <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <label><strong>Confirm Password:</strong></label>
                  <div className="input-group">
                    <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" className="form-control" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} required />
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-person-plus"></i> Register
              </button>
            </form>

            <p className="text-center mt-2">
              Already have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;







