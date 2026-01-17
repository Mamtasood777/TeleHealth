import React, { useState } from "react";
import { UserPlus, Search, Calendar, Video, FileText, ChevronDown, ChevronUp } from "lucide-react";
import "../styles/HowItWorks.css";
import logo from "../assets/IMAGE.png";

export default function HowItWorks() {
    const [openStep, setOpenStep] = useState(null);

    const toggleStep = (index) => {
        setOpenStep(openStep === index ? null : index);
    };

    const steps = [
        {
            icon: <UserPlus size={32} />,
            title: "1. Register & Create Profile",
            description: "Sign up for free and create your secure patient profile to get started.",
            details: [
                "Enter your mobile number or email to receive a verification OTP.",
                "Set up your secure password and profile PIN.",
                "Fill in basic details like age, gender, and medical history.",
                "Upload any past medical records for better diagnosis."
            ]
        },
        {
            icon: <Search size={32} />,
            title: "2. Find the Right Doctor",
            description: "Browse certified specialists and search by specialty, experience, or rating.",
            details: [
                "Filter doctors by specialization (Cardiologist, Dermatologist, etc.).",
                "View doctor profiles, qualifications, and years of experience.",
                "Read real patient reviews and ratings.",
                "Check available languages for comfortable communication."
            ]
        },
        {
            icon: <Calendar size={32} />,
            title: "3. Book an Appointment",
            description: "Pick a time slot that suits your schedule with instant confirmation.",
            details: [
                "Choose a date and time that works best for you.",
                "Select between Video Consultation, Audio Call, or Chat.",
                "Pay securely online using Credit Card, UPI, or Net Banking.",
                "Receive instant booking confirmation via SMS and Email."
            ]
        },
        {
            icon: <Video size={32} />,
            title: "4. Consult Online",
            description: "Connect via high-quality video call securely from the comfort of your home.",
            details: [
                "Join the call directly from the app or website at the scheduled time.",
                "High-definition video and clear audio for accurate examination.",
                "Secure and private encrypted connection.",
                "Share symptoms and show visible issues directly via camera."
            ]
        },
        {
            icon: <FileText size={32} />,
            title: "5. Get Prescription & Reports",
            description: "Receive prescriptions and digital reports instantly after the consultation.",
            details: [
                "Doctor uploads the digital prescription immediately after the call.",
                "Download reports in PDF format for printing or sharing.",
                "Order prescribed medicines directly from our pharmacy partners.",
                "Access your complete consultation history anytime."
            ]
        }
    ];

    return (
        <div className="how-it-works-container">
            {/* Header */}
            <div className="how-it-works-header">
                <h1>How It Works</h1>
                <img src={logo} alt="TeleHealth Logo" className="how-it-works-logo-top" />
            </div>

            <div className="intro-text">
                <p>
                    Your journey to better health is just a few clicks away! <br />
                    <strong>Simple. Fast. Secure.</strong>
                </p>
            </div>

            {/* Steps List */}
            <div className="how-it-works-steps">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`how-it-works-step ${openStep === index ? 'active' : ''}`}
                        onClick={() => toggleStep(index)}
                    >
                        <div className="step-main-content">
                            <div className="step-icon-container">
                                {step.icon}
                            </div>
                            <div className="step-content">
                                <h2>{step.title}</h2>
                                <p className="step-description">{step.description}</p>
                            </div>
                            <div className="step-toggle-icon">
                                {openStep === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                            </div>
                        </div>

                        {/* Expandable Details */}
                        <div className={`step-details ${openStep === index ? 'open' : ''}`}>
                            <ul>
                                {step.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <section className="how-it-works-cta">
                <h2>Start Your Health Journey!</h2>
                <p>
                    Join 10,000+ happy patients using TeleHealth today.
                </p>
                <a href="/register" className="cta-button">Join Now</a>
            </section>
        </div>
    );
}
