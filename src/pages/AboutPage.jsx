import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div>
        {/* Header */}
        <h2 className="about-title">About BromenWallet</h2>
        <p>
          BromenWallet is your ultimate digital wallet solution, designed to make managing your finances simple, secure, and seamless. 
          With cutting-edge features and an intuitive interface, BromenWallet empowers users to handle transactions, track expenses, 
          and achieve financial goals with ease.
        </p>

        <p>
          Whether you're making payments, saving for the future, or monitoring your spending, BromenWallet provides all the tools you need 
          to take control of your financial life. Built with security and user privacy in mind, our platform ensures that your data is 
          protected at all times.
        </p>

        <p>
          Join us on this journey to redefine financial management and experience the freedom of a smarter, more connected way to handle your money.
        </p>

        {/* Back to Home Button */}
        <button onClick={() => navigate('/')} className="green-button">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
