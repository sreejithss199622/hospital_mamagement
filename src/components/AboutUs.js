


import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "linear-gradient(to right, #74ebd5, #acb6e5)", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" style={{ background: "linear-gradient(135deg, #003366, #0056b3)" }}>
        <div className="container">
          <a className="navbar-brand text-white fw-bold" href="/">
            Medicare Hospital
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-light mx-2" onClick={() => navigate("/")}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning mx-2" onClick={() => navigate("/login")}>
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Us Content */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card className="shadow-lg border-0" style={{ borderRadius: "15px", background: "#ffffffdd" }}>
              <Card.Body>
                <Card.Title className="text-center text-primary fw-bold fs-3">About Us</Card.Title>
                <Card.Text className="text-center">
                  We are committed to providing the best healthcare services. Our platform allows you to manage your
                  appointments, consult with doctors, and access your medical history online. We have a team of experienced
                  doctors and healthcare professionals dedicated to ensuring your well-being.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
