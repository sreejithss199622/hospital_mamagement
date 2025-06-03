import React from "react";

function Card({ image, name, department, experience, date, onBookAppointment, showBookButton = true }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm mb-4">
        <img src={image} className="card-img-top img-fluid" alt={`Profile of ${name}`} />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Department:</strong> {department}
            <br />
            <strong>Qualification:</strong> {Qualification}
            <br />
            <strong>Experience:</strong> {experience}
            <br />
            {date && (
              <>
                <strong>Date:</strong> {date}
              </>
            )}
          </p>
          {/* <button className="btn btn-primary" onClick={() => alert(Viewing ${name}'s profile)}>
            View Profile
          </button> */}
          {showBookButton && (
            <button className="btn btn-secondary mt-2" onClick={onBookAppointment}>
              Book Appointment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;