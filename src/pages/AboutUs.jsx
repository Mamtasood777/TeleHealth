import React, { useState } from "react";
import "../styles/AboutUs.css";
import logo from "../assets/IMAGE.png"; // your logo

export default function AboutUs() {
  const [showTeam, setShowTeam] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="about-page-container">
      {/* Header with Title + Logo */}
      <div className="about-page-header">
        <h1>About TeleHealth</h1>
        <img src={logo} alt="TeleHealth Logo" className="about-page-logo-top" />
      </div>

      {/* Intro Section */}
      <section className="about-page-section intro">
        <p>
          TeleHealth is a trusted online healthcare platform dedicated to
          connecting patients with certified doctors and healthcare
          professionals anytime, anywhere. We aim to make healthcare
          accessible, reliable, and convenient for everyone, leveraging modern
          technology to deliver quality medical care.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-page-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality, accessible healthcare to
          every individual, regardless of location. We strive to ensure that
          every patient receives timely medical advice, consultation, and
          support.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a world where healthcare is not limited by geography or
          time. Our goal is to create a platform where patients can access
          doctors, mental health support, prescriptions, and health records
          securely from their homes.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-page-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team consists of highly qualified doctors, mental health
          counselors, and support staff who are committed to providing
          exceptional care to every patient.
        </p>

        {showTeam && (
          <ul className="about-page-team-list">
            <li>Dr. Priya Sharma – General Physician</li>
            <li>Dr. Rajiv Mehta – Cardiologist</li>
            <li>Dr. Ananya Singh – Mental Health Specialist</li>
            <li>Dr. Aman Gupta – Pediatrician</li>
          </ul>
        )}

        <button
          className="about-page-toggle-btn"
          onClick={() => setShowTeam(!showTeam)}
        >
          {showTeam ? "Hide Team" : "View Team"}
        </button>
      </section>

      {/* Services Section */}
      <section className="about-page-section">
        <h2>Our Services</h2>
        <p>
          TeleHealth offers a wide range of services to meet your healthcare
          needs.
        </p>

        {showServices && (
          <ul className="about-page-services-list">
            <li>Virtual Consultations (Audio & Video)</li>
            <li>Mental Health Support & Therapy</li>
            <li>Prescription Management</li>
            <li>Diagnostic Reports Access</li>
            <li>Online Health Records</li>
            <li>Emergency & First-Aid Guidance</li>
          </ul>
        )}

        <button
          className="about-page-toggle-btn"
          onClick={() => setShowServices(!showServices)}
        >
          {showServices ? "Hide Services" : "View Services"}
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-page-section about-page-why-list">
        <h2>Why Choose TeleHealth?</h2>
        <ul>
          <li>24/7 access to healthcare professionals</li>
          <li>Secure and private platform for patient data</li>
          <li>Convenient virtual consultations</li>
          <li>Comprehensive health records and reports</li>
          <li>Experienced and certified medical team</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="about-page-cta">
        <h2>Get Started Today!</h2>
        <p>
          Join thousands of patients who trust TeleHealth for their medical
          needs. Sign up now and access healthcare anytime, anywhere.
        </p>
      </section>
    </div>
  );
}
