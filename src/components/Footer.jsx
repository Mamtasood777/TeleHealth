import "../components/Footer.css";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLUMN 1 – BRAND INFO */}
        <div className="footer-section">
          <h3 className="footer-title">TeleHealth</h3>
          <p className="footer-description">
            Connecting you with top healthcare professionals from anywhere,
            anytime. Your trusted platform for virtual medical care.
          </p>

          <div className="social-icons">
            <a href="#">
              <Facebook size={22} />
            </a>
            <a href="#">
              <Twitter size={22} />
            </a>
            <a href="#">
              <Linkedin size={22} />
            </a>
            <a href="#">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* COLUMN 2 – SERVICES */}
        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li>
              <Link to="/ambulance-booking-service">
                Ambulance Booking Service
              </Link>
            </li>
            <li>
              <Link to="/wellness-services">Wellness Services</Link>
            </li>
            <li>
              <Link to="/health-insurance">Health Insurance</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 – QUICK LINKS */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>

            <li>
              <Link to="/how-it-works">How It Works</Link>
            </li>

          </ul>
        </div>

        {/* COLUMN 4 – CONTACT INFO */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="contact-list">
            <li>
              <Phone size={20} />
              <span>
                1800-123-4567
                <br />
                <small>Available 24/7</small>
              </span>
            </li>

            <li>
              <Mail size={20} />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=telehealth785@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </li>

            <li>
              <MapPin size={30} />
              <span>
                Dehradun, Uttarakhand – 248001
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 TeleHealth. All rights reserved.</p>
        <div className="bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/medical-data-management-policy">
            Medical Data Management Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
