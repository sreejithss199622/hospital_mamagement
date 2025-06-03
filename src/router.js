import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import MyAppointments from './components/MyAppointments';
import BookAppointment from './components/BookAppointment';
import DoctorList from './components/DoctorList';
import EditProfile from './components/EditProfile';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision';
import Services from './components/services';
import ErrorBoundary from './components/ErrorBoundary';

function AppRouter() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myappointments" element={<MyAppointments />} />
          <Route path="/bookappointment/:doctorId" element={<BookAppointment />} />
          <Route path="/doctorlist" element={<DoctorList />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<LandingPage />} />  {/* Fallback route */}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default AppRouter;