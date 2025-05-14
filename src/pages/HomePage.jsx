import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Folder, Lock, Upload, FileText } from 'lucide-react';

// Reusable FeatureCard component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-wrapper">
      <Icon className="icon" />
    </div>  
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

// Home page component
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navigation">
        <div>
          <div>
            <div onClick={() => navigate('/')}>
              <Folder id='nn'/>
              <span id='bb'>LifeEase</span>
            </div>
            <div className='navButton'>
              <button onClick={() => navigate('/login')} className="green-button">
                Login
              </button>
              <button onClick={() => navigate('/signup')} className="green-button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero-section">
        <div id='descriptionCont'>
          <h1>
            Organize & Secure Your Documents with LifeEase
          </h1>
          <p>
            Store, manage, and access your personal and official documents in one place.  
            LifeEase makes document organization simple and secure.
          </p>
          <button onClick={() => navigate('/signup')} className="g-button">
            Get Started Free
          </button>
        </div>

        {/* Features Section */}
        <h1 className='HH'>Why Choose LifeEase?</h1>
        <div id='my-line'>
          <FeatureCard 
            icon={Upload}
            title="Easy Document Upload"
            description="Quickly upload and categorize your important documents for easy retrieval."
          />
          <FeatureCard
            icon={Folder}
            title="Smart Organization"
            description="Sort and manage documents effortlessly with intelligent categorization."
          />
          <FeatureCard 
            icon={Lock}
            title="Secure & Private"
            description="Your documents are stored with end-to-end encryption, ensuring privacy and security."
          />
          <FeatureCard 
            icon={FileText}
            title="Quick Access & Sharing"
            description="Access your files anytime, anywhere, and securely share documents with others."
          />
        </div>

        {/* Call to Action Section */}
        <div className='calls'>
          <h2>
            Start Managing Your Documents Today!
          </h2>
          <p>
            Join thousands of users who trust LifeEase for secure and organized document storage.
          </p>
          <div>
            <button onClick={() => navigate('/about')} className="a-button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className='footer'>
          <div className='footerlogo'>
            <Folder id='nfooter'/>
            <span id='bfooter'>LifeEase</span>
          </div>
          <p className='footerp'>© 2025 LifeEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
