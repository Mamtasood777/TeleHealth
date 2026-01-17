import React, { useState } from "react";
import { Shield, Heart, Umbrella, Activity, CheckCircle } from "lucide-react";
import "../styles/HealthInsurance.css";

const HealthInsurance = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        email: "",
        policyType: "Basic",
        preExistingConditions: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // console.log("Form Data Submitted:", formData);
    };

    const benefits = [
        {
            icon: <Shield size={40} color="#1e90ff" />,
            title: "Financial Security",
            description: "Covers medical expenses and protects you from unexpected high healthcare costs.",
        },
        {
            icon: <Heart size={40} color="#1e90ff" />,
            title: "Access to Quality Care",
            description: "Get timely treatment from our network of top-rated hospitals and specialist clinics.",
        },
        {
            icon: <Umbrella size={40} color="#1e90ff" />,
            title: "Peace of Mind",
            description: "Rest easy knowing you and your family are protected against unforeseen health emergencies.",
        },
        {
            icon: <Activity size={40} color="#1e90ff" />,
            title: "Preventive Care",
            description: "Includes coverage for regular health check-ups to catch potential issues early.",
        },
    ];

    return (
        <div className="hi-container">
            <h1 className="hi-title">Health Insurance Portal</h1>
            <p className="hi-subtitle">Secure your future with our comprehensive health protection plans.</p>

            <section className="hi-benefits-section">
                <h2 className="hi-section-title">Why Choose Our Insurance?</h2>
                <div className="hi-benefits-cards">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="hi-card">
                            <div style={{ marginBottom: '15px' }}>{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {!submitted ? (
                <div className="form-container">
                    <h2 className="hi-section-title">Apply for Insurance</h2>
                    <form className="hi-form" onSubmit={handleSubmit}>
                        <div>
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div>
                                <label>Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="25"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label>Policy Type</label>
                                <select
                                    name="policyType"
                                    value={formData.policyType}
                                    onChange={handleChange}
                                >
                                    <option value="Basic">Basic Plan</option>
                                    <option value="Standard">Standard Plan</option>
                                    <option value="Premium">Premium Plan</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label>Pre-existing Conditions (Optional)</label>
                            <textarea
                                name="preExistingConditions"
                                value={formData.preExistingConditions}
                                onChange={handleChange}
                                placeholder="Please list any existing medical conditions..."
                            ></textarea>
                        </div>

                        <button type="submit" className="hi-button">
                            Submit Application
                        </button>
                    </form>
                </div>
            ) : (
                <div className="hi-success">
                    <CheckCircle size={60} color="#00c853" style={{ marginBottom: '20px' }} />
                    <h2>Application Submitted!</h2>
                    <p>Thank you, {formData.fullName}. <br /> Our team will review your application and contact you at {formData.email} shortly.</p>
                </div>
            )}
        </div>
    );
};

export default HealthInsurance;
