import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndServices from "./pages/TermsAndServices";
import MedicalDataPolicy from "./pages/MedicalDataManagementPolicy";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import AmbulanceBooking from "./pages/AmbulanceBooking";
import HowItWorks from "./pages/HowItWorks";
import WellnessServices from "./pages/WellnessServices";
import HealthInsurance from "./pages/HealthInsurance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndServices />} />
        <Route path="/medical-data-management-policy" element={<MedicalDataPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ambulance-booking-service" element={<AmbulanceBooking />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/wellness-services" element={<WellnessServices />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
        {/* Add other pages if needed */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
