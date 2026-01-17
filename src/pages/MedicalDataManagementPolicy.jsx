import React from "react";
import "../styles/TermsAndServices.css";
import logo from "../assets/IMAGE.png";

const MedicalDataManagementPolicy = () => {
  return (
    <div className="ts-container">
      <img src={logo} alt="TeleHealth Logo" className="ts-logo-top" />

      <h1 className="ts-main">Medical Data Management </h1>

      <p className="ts-text">
        This Medical Data Management Policy explains how we collect, use, store, and protect your personal and medical information on our platform. 
        </p>
      <h3 className="ts-head">Collection of Health Data</h3>
      <p className="ts-text">
        We collect only the information necessary to provide healthcare services, including:
      </p>
      <ul className="ts-text">
        <li>Personal identifiers: Name, contact details, date of birth</li>
        <li>Medical history, symptoms, and treatment records</li>
        <li>Health insurance or billing information (if applicable)</li>
        <li>Device or app usage data for service improvement</li>
      </ul>

      <h3 className="ts-head">Purpose of Data Collection</h3>
      <p className="ts-text">
        The data collected is used to:
      </p>
      <ul className="ts-text">
        <li>Provide personalized healthcare recommendations</li>
        <li>Enable communication with healthcare providers</li>
        <li>Maintain accurate medical records</li>
        <li>Improve platform functionality and user experience</li>
        <li>Comply with Indian regulations and NDHM guidelines</li>
      </ul>

      <h3 className="ts-head">Data Security Measures</h3>
      <p className="ts-text">
        Protecting your health data is our priority. We follow strict security practices, including:
      </p>
      <ul className="ts-text">
        <li>Encryption of data in transit and at rest</li>
        <li>Secure login and access control for authorized personnel only</li>
        <li>Regular system audits and monitoring</li>
        <li>Immediate action in case of data breaches</li>
      </ul>

      <h3 className="ts-head">Data Sharing and Third Parties</h3>
      <p className="ts-text">
        Your medical information will only be shared with:
      </p>
      <ul className="ts-text">
        <li>Authorized healthcare providers directly involved in your care</li>
        <li>Partners for billing or medical processing, strictly as required</li>
      </ul>
      <p className="ts-text">
        We do not sell, trade, or rent your personal health information to third parties.
      </p>

      <h3 className="ts-head">User Rights</h3>
      <p className="ts-text">
        You have the following rights under Indian data protection principles:
      </p>
      <ul className="ts-text">
        <li>Access your personal and medical information</li>
        <li>Request corrections to any inaccurate or incomplete data</li>
        <li>Request deletion of your data where legally permissible</li>
        <li>Withdraw consent for data processing at any time</li>
      </ul>

      <h3 className="ts-head">Retention of Data</h3>
      <p className="ts-text">
        We retain your health data only for as long as necessary to provide services and comply with legal requirements under Indian regulations and NDHM guidelines. Once the retention period ends, data is securely deleted or anonymized.
      </p>

      <h3 className="ts-head">Policy Updates</h3>
      <p className="ts-text">
        We may update this policy to improve security, comply with legal requirements, or introduce new features. Users will be notified of significant changes.
      </p>

      <h3 className="ts-head">Compliance with Indian Guidelines</h3>
      <p className="ts-text">
        Our platform follows Indian data protection laws including:
      </p>
      <ul className="ts-text">
        <li>Information Technology (IT) Act 2000 and Sensitive Personal Data Rules, 2011</li>
        <li>National Digital Health Mission (NDHM) standards for secure healthcare data</li>
        <li>Other applicable regulations regarding storage, security, and sharing of medical data</li>
      </ul>

      {/* <h3 className="ts-head">Acceptance</h3>
      <p className="ts-text">
        By continuing to use this platform, you acknowledge that you have read and agreed to this Medical Data Management Policy.
      </p> */}
    </div>
  );
};

export default MedicalDataManagementPolicy;
