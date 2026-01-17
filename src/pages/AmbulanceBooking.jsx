import React, { useState } from "react";
import "../styles/AmbulanceBooking.css";

const AmbulanceBooking = () => {
  const [bookingDone, setBookingDone] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setBookingDone(true);
  e.target.reset();
};

  return (
    <div className="ambulance-container">
      <h1 className="ambulance-title">Ambulance Booking Service</h1>
      <p className="ambulance-subtitle">
        Get emergency medical assistance quickly and safely.
      </p>

      {bookingDone && (
        <div className="success-message">
          ✅ Ambulance booked successfully!
        </div>
      )}

      <div className="ambulance-card">
        <form className="ambulance-form" onSubmit={handleSubmit}>
                 <label>Patient Name</label>
          <input type="text" placeholder="Enter patient name" required />

          <label>Patient Age</label>
          <input type="number" placeholder="Enter patient age" required />

          <label>Contact Number</label>
          <input type="tel" placeholder="Enter contact number" required />

          <label>Pickup Location</label>
          <input type="text" placeholder="Enter pickup location" required />

          <label>Drop Location / Hospital</label>
          <input
            type="text"
            placeholder="Enter hospital name or address"
            required
          />



          <label>Emergency Type</label>
          <select required>
            <option value="">Select</option>
            <option>Accident</option>
            <option>Medical Emergency</option>
            <option>Pregnancy</option>
            <option>Other</option>
          </select>

          <button type="submit" className="ambulance-btn">
            Book Ambulance
          </button>
        </form>
      </div>
    </div>
  );
};

export default AmbulanceBooking;
