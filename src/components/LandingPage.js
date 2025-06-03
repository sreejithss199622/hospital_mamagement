

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import '../styles.css';  // Import the custom styles

// // Flip Card Component
// const FlipCard = ({ title, frontText, backText }) => {
//   return (
//     <div className="flip-card">
//       <div className="flip-card-inner">
//         <div className="flip-card-front">
//           <h3>{title}</h3>
//           <p>{frontText}</p>
//         </div>
//         <div className="flip-card-back">
//           <p>{backText}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// function LandingPage() {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand as={Link} to="/">MediCare Hospital</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About Us</Nav.Link>
//             <Nav.Link as={Link} to="/login">Login</Nav.Link>
//             <Nav.Link as={Link} to="/register">Signup</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-content">
//           <h1>Welcome to MediCare Hospital</h1>
//           <p>Your journey to better health starts here.</p>
//           <Button variant="primary" as={Link} to="/register">Get Started</Button>
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <div className="container mt-5 content-wrapper">
//         <div className="row">
//           <div className="col-12 p-0">
//             <Carousel className="mb-5">
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src="https://www.emccochin.com/themes/frontend/images/banner3.jpg"
//                   alt="First slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src="https://mediplusmz.com/wp-content/uploads/2024/06/DONATE1_Artboard-1-scaled.jpg"
//                   alt="Second slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src="https://www.mithaasdiabetes.com/images/banner1.png"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </div>

//         {/* Flip Cards Section */}
//         <div className="row">
//           <div className="col-md-4">
//             <FlipCard 
//               title="About Us" 
//               frontText="Committed to delivering quality healthcare."
//               backText="We are committed to providing the best healthcare services. Our platform allows you to manage your
//                   appointments, consult with doctors, and access your medical history online. We have a team of experienced
//                   doctors and healthcare professionals dedicated to ensuring your well-being."
//             />
//           </div>

//           <div className="col-md-4">
//             <FlipCard 
//               title="Vision & Mission" 
//               frontText="Making healthcare accessible for everyone."
//               backText=" Society that can afford healthcare cost; that is healthy, active and vibrant to fight against lifestyle and modern diseases; a state actively involving, interfering & regulating the unethical practices and providing a pollution free environment, taking care of the old and weak, thereby establishing a proper healthcare system for the people of the state."
//             />
//           </div>

//           <div className="col-md-4">
//             <FlipCard 
//               title="Our Services" 
//               frontText="Emergency, Outpatient, Surgery & more."
//               backText="    We offer a wide range of services including emergency care, outpatient services, specialized treatments, and more. Our dedicated team of professionals is here to provide the best care possible."
//             />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <span>© 2025 Hospital Management System. All rights reserved.</span>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import '../styles.css';  
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

// // Flip Card Component
// const FlipCard = ({ icon, title, frontText, backText }) => {
//   return (
//     <div className="flip-card">
//       <div className="flip-card-inner">
//         <div className="flip-card-front">
//           <i className={`bi ${icon} flip-card-icon`}></i>
//           <h3>{title}</h3>
//           <p>{frontText}</p>
//         </div>
//         <div className="flip-card-back">
//           <p>{backText}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// function LandingPage() {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand as={Link} to="/">
//           <i className="bi bi-hospital-fill"></i> MediCare Hospital
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/"><i className="bi bi-house-door"></i> Home</Nav.Link>
//             <Nav.Link as={Link} to="/about"><i className="bi bi-info-circle"></i> About Us</Nav.Link>
//             <Nav.Link as={Link} to="/login"><i className="bi bi-box-arrow-in-right"></i> Login</Nav.Link>
//             <Nav.Link as={Link} to="/register"><i className="bi bi-person-plus"></i> Signup</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-content">
//           <h1>Welcome to MediCare Hospital</h1>
//           <p>Your journey to better health starts here.</p>
//           <Button variant="primary" as={Link} to="/register">
//             <i className="bi bi-arrow-right-circle"></i> Get Started
//           </Button>
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <div className="container mt-5 content-wrapper">
//         <div className="row">
//           <div className="col-12 p-0">
//             <Carousel className="mb-5">
//               <Carousel.Item>
//                 <img className="d-block w-100" src="https://www.emccochin.com/themes/frontend/images/banner3.jpg" alt="First slide"/>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img className="d-block w-100" src="https://mediplusmz.com/wp-content/uploads/2024/06/DONATE1_Artboard-1-scaled.jpg" alt="Second slide"/>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img className="d-block w-100" src="https://www.mithaasdiabetes.com/images/banner1.png" alt="Third slide"/>
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </div>

//         {/* Flip Cards Section */}
//         <div className="row">
//           <div className="col-md-4">
//             <FlipCard 
//               icon="bi-people-fill" 
//               title="About Us" 
//               frontText="Committed to delivering quality healthcare."
//               backText="We are committed to providing the best healthcare services. Our platform allows you to manage your
//                   appointments, consult with doctors, and access your medical history online. We have a team of experienced
//                   doctors and healthcare professionals dedicated to ensuring your well-being."
//             />
//           </div>

//           <div className="col-md-4">
//             <FlipCard 
//               icon="bi-eye-fill" 
//               title="Vision & Mission" 
//               frontText="Making healthcare accessible for everyone."
//               backText="A society that can afford healthcare costs; that is healthy, active, and vibrant to fight against lifestyle and modern diseases; a state actively involving, interfering & regulating unethical practices and providing a pollution-free environment."
//             />
//           </div>

//           <div className="col-md-4">
//             <FlipCard 
//               icon="bi-briefcase-medical" 
//               title="Our Services" 
//               frontText="Emergency, Outpatient, Surgery & more."
//               backText="We offer a wide range of services including emergency care, outpatient services, specialized treatments, and more. Our dedicated team of professionals is here to provide the best care possible."
//             />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <span><i className="bi bi-c-circle"></i> 2025 Hospital Management System. All rights reserved.</span>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;


import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles.css';  // Import custom styles

// Flip Card Component
const FlipCard = ({ icon, title, frontText, backText }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <i className={`flip-card-icon ${icon}`}></i>
          <h3>{title}</h3>
          <p>{frontText}</p>
        </div>
        <div className="flip-card-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-hospital"></i> MediCare Hospital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/"><i className="bi bi-house-door"></i> Home</Nav.Link>
            <Nav.Link as={Link} to="/about"><i className="bi bi-info-circle"></i> About Us</Nav.Link>
            <Nav.Link as={Link} to="/login"><i className="bi bi-box-arrow-in-right"></i> Login</Nav.Link>
            <Nav.Link as={Link} to="/register"><i className="bi bi-person-plus"></i> Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to MediCare Hospital</h1>
          <p>Your journey to better health starts here.</p>
          <Button variant="primary" as={Link} to="/register">
            <i className="bi bi-arrow-right-circle"></i> Get Started
          </Button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container mt-5 content-wrapper">
        <div className="row">
          <div className="col-12 p-0">
            <Carousel className="mb-5">
              <Carousel.Item>
                <img className="d-block w-100" src="https://www.emccochin.com/themes/frontend/images/banner3.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://mediplusmz.com/wp-content/uploads/2024/06/DONATE1_Artboard-1-scaled.jpg" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="https://www.mithaasdiabetes.com/images/banner1.png" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* Flip Cards Section */}
        <div className="row">
          <div className="col-md-4">
            <FlipCard 
              icon="bi bi-building"
              title="About Us" 
              frontText="Committed to delivering quality healthcare."
              backText="We provide top-notch medical care with expert doctors, modern facilities, and a commitment to patient well-being."
            />
          </div>

          <div className="col-md-4">
            <FlipCard 
              icon="bi bi-eye"
              title="Vision & Mission" 
              frontText="Making healthcare accessible for everyone."
              backText="We strive for a society with affordable, high-quality healthcare, ensuring everyone gets the treatment they deserve."
            />
          </div>

          <div className="col-md-4">
            <FlipCard 
              icon="bi bi-heart-pulse"
              title="Our Services" 
              frontText="Emergency, Outpatient, Surgery & more."
              backText="From emergency care to specialized treatments, we provide a wide range of medical services to ensure your health and well-being."
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <span>© 2025 Hospital Management System. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;







