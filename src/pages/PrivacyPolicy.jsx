// src/pages/PrivacyPolicy.jsx
import React from "react";
import "../styles/PrivacyPolicy.css";
import logo from "../assets/IMAGE.png";

const PrivacyPolicy = () => {
  return (
    <div className="pp-container">
      <img src={logo} alt="TeleHealth Logo" className="pp-logo-top" />
<h1 className="pp-main">Privacy Policy</h1>

      <p className="pp-text">
        This Privacy Policy explains how our healthcare system collects, uses,
        and protects your personal and health-related information. We are
        committed to maintaining your trust by handling your data responsibly
        and securely.
      </p>

      <h3 className="pp-head">Information We Collect</h3>
      <p className="pp-text">
        We collect basic personal information such as your name, phone number,
        email address, and health details that you voluntarily provide while
        using our healthcare services. This information helps us understand your
        needs and provide proper medical support.
      </p>

      <h3 className="pp-head">How We Use Information</h3>
      <p className="pp-text">
        The information collected is used only for healthcare purposes. This
        includes providing medical services, responding to your requests,
        improving system functionality, and ensuring better patient care. Your
        data is never used for unnecessary or unrelated activities.
      </p>

      <h3 className="pp-head">Data Protection</h3>
      <p className="pp-text">
        We take appropriate security measures to protect your personal and
        health information from unauthorized access, loss, or misuse. Only
        authorized personnel are allowed to access sensitive data, and we
        regularly review our security practices.
      </p>

      <h3 className="pp-head">Sharing Information</h3>
      <p className="pp-text">
        We do not sell or trade your personal information. Data may be shared
        only when it is necessary for medical treatment, healthcare support, or
        when required by legal authorities. We ensure that any shared data is
        handled carefully.
      </p>

      <h3 className="pp-head">Policy Updates</h3>
      <p className="pp-text">
        This Privacy Policy may be updated from time to time to reflect changes
        in our services or legal requirements. Any updates will be posted on
        this page so users can stay informed about how their information is
        managed.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
