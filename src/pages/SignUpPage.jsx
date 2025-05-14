import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, Lock, Eye, EyeOff, Mail, Phone,Folder, Globe, FileText, MapPin, Calendar, Image as ImageIcon, Users
} from "lucide-react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    nationality: "",
    idNumber: "",
    residentLocation: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    profilePicture: null,
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "Registration successful! Redirecting to login...", type: "success" });
        setTimeout(() => navigate("/login"), 1500); // Redirect to login page after successful registration
      } else {
        setMessage({ text: data.msg || "Invalid credentials", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Something went wrong!", type: "error" });
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profilePicture: e.target.files[0] }));
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="navigationlog">
        <div onClick={() => navigate("/")}> 
          <Folder id="nn" />
          <span id="bb">LifeEase</span>
        </div>
      </nav>

      {/* Sign Up Form */}
      <div className="foamsignup">
        <div className="signup-box">
          <h2 className="signup-title">Sign Up</h2>

          {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

          <form onSubmit={handleSubmit} className="foamsignup">
            <div id="myfoam">
              <div>
            {/* First Name & Last Name */}
            <div className="input-group">
              <div className="input-container">
                <User className="input-icon" />
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
              </div>
              <div className="input-container">
                <User className="input-icon" />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="input-group">
              <div className="input-container">
                <Mail className="input-icon" />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              </div>
              <div className="input-container">
                <Phone className="input-icon" />
                <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="input-group">
              <div className="input-container">
                <Lock className="input-icon" />
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} required />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              <div className="input-container">
                <Lock className="input-icon" />
                <input type="password" name="confirmPassword" placeholder="Re-enter Password" onChange={handleChange} required />
              </div>
            </div>
            </div>
            <div>
            {/* Nationality & ID Number */}
            <div className="input-group">
              <div className="input-container">
                <Globe className="input-icon" />
                <input type="text" name="nationality" placeholder="Nationality" onChange={handleChange} required />
              </div>
              <div className="input-container">
                <FileText className="input-icon" />
                <input type="text" name="idNumber" placeholder="ID Number" onChange={handleChange} required />
              </div>
            </div>
            
            {/* Resident Location & Gender */}
            <div className="input-group">
              <div className="input-container">
                <MapPin className="input-icon" />
                <input type="text" name="residentLocation" placeholder="Resident Location" onChange={handleChange} required />
              </div>
              <div className="input-container">
                <Users className="input-icon" />
                <select name="gender" onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Date of Birth & Marital Status */}
            <div className="input-group">
              <div className="input-container">
                <Calendar className="input-icon" />
                <input type="date" name="dob" onChange={handleChange} required />
              </div>
              <div className="input-container">
                <Users className="input-icon" />
                <select name="maritalStatus" onChange={handleChange} required>
                  <option value="">Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
            </div>

            {/* Profile Picture Upload */}
            <div className="input-container">
              <ImageIcon className="input-icon" />
              <input type="file" name="profilePicture" accept="image/*" onChange={handleFileChange} />
            </div>
            </div>
            </div>
            {/* Submit Button */}
            <button type="submit" className="green-button">Sign up</button>
          </form>
          <div className="lognav">
          <p>Or sign in here </p>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>

        {/* <div className="social-login">
           <p>Or sign up with </p>
          <div className="social">
            <button className="social-btn google">Google</button>
            <button className="social-btn github">GitHub</button>
          </div>
        </div> */}
        
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
