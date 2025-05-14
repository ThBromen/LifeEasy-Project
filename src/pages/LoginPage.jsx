import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, Folder, Mail } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (response.ok) {
        setMessage({ text: "Login successful! Redirecting...", type: "success" });
        localStorage.setItem("token", data.token);
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setMessage({ text: data.msg || "Invalid email or password", type: "error" });
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage({ text: "Something went wrong!", type: "error" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="signupdd">
      <nav id="navigationlog">
        <div onClick={() => navigate("/")}> 
          <Folder id="nn" />
          <span id="bb">LifeEase</span>
        </div>
      </nav>
      
      <div className="foamsignup">
        <h2>Please sign in to continue</h2>
        
        <form onSubmit={handleSubmit} className="foamsignup">
          <div className="input-container">
            <Mail className="input-icon" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          </div>
          
          <div className="input-container">
            <Lock className="input-icon" />
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} required />
            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          
          {message.text && <div className={`message ${message.type === "success" ? "success" : "error"}`}>{message.text}</div>}
          
          <div className="text-right">
            <button type="button" className="link-button" onClick={() => navigate("/ForgotPassword")}>
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="green-button">
            Sign In
          </button>

          <div className="lognav">
            <span >Don't have an account? </span>
            <button onClick={() => navigate("/signup")} className="link-button">
              Sign up
            </button>
          </div>
        </form>
        
        {/* Social Media Sign-In */}
        {/* <div className="social-login">
          <p>Or sign in with</p>
          <div className="social">
            <button className="social-btn google">Google</button>
            <button className="social-btn github">GitHub</button>
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default LoginPage;
