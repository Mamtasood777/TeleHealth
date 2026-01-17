import React from "react";
import "../styles/TermsAndServices.css";
import logo from "../assets/IMAGE.png";

const TermsAndServices = () => {
  return (
    <div className="ts-container">
      <img src={logo} alt="TeleHealth Logo" className="ts-logo-top" />

     <h1 className="ts-main">Terms and Services</h1>

<p className="ts-text">
  These Terms and Services explain the basic rules and conditions for using our
  healthcare platform. The purpose of these terms is to ensure safe, fair, and
  responsible use of the system.
</p>

<h3 className="ts-head">Use of Service</h3>
<p className="ts-text">
  This platform is designed to provide healthcare support and general medical
  information. It should be used only for its intended purpose and in a
  respectful manner.
</p>
<ul className="ts-list">
  <li>Use the platform only for healthcare-related needs</li>
  <li>Follow all rules while accessing the service</li>
  <li>Avoid activities that may damage or disrupt the system</li>
</ul>

<h3 className="ts-head">User Responsibility</h3>
<p className="ts-text">
  Users are expected to provide accurate and honest information while using the
  platform. Correct information helps us deliver better healthcare support and
  ensures proper communication.
</p>
<ul className="ts-list">
  <li>Provide true and updated personal details</li>
  <li>Do not submit false, misleading, or incomplete information</li>
  <li>Use the platform in a lawful and ethical way</li>
</ul>

<h3 className="ts-head">Medical Disclaimer</h3>
<p className="ts-text">
  The content available on this platform is intended for general information and
  educational purposes only. It should not be considered as professional
  medical advice.
</p>
<ul className="ts-list">
  <li>Information does not replace medical consultation</li>
  <li>Always consult a qualified healthcare professional</li>
  <li>Do not rely only on online information for medical decisions</li>
</ul>

<h3 className="ts-head">Account Security</h3>
<p className="ts-text">
  Users are responsible for maintaining the security of their account and login
  details. Protecting account information helps prevent unauthorized access.
</p>
<ul className="ts-list">
  <li>Keep login credentials private</li>
  <li>Do not share your account with others</li>
  <li>Report any suspicious activity immediately</li>
</ul>

<h3 className="ts-head">Service Changes</h3>
<p className="ts-text">
  We may update, modify, or improve our services to enhance performance or meet
  legal and technical requirements. These changes help us provide better and
  more secure services.
</p>

{/* <h3 className="ts-head">Acceptance of Terms</h3>
<p className="ts-text">
  By continuing to use this platform, you confirm that you have read,
  understood, and agreed to follow these Terms and Services.
</p> */}

    </div>
  );
};

export default TermsAndServices;
