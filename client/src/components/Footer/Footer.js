import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <footer className="footer">
      <Container className="text-center mb-2">
        {location.pathname !== '/' && (
          <Button
            variant="dark"
            className="mb-3"
            onClick={handleGoBack}
          >
            &larr; Go Back
          </Button>
        )}
        <h4>
          © 2023 Tech Solutions - IT Service App | All rights reserved. <br />
          <a href="https://www.freeprivacypolicy.com">Privacy Policy</a> | <a href="ttps://www.termsfeed.com/terms-conditions-generator">Terms of Service</a>{" "}
        </h4>

      </Container>
      <div className="social-links">
      <h4 class="social-links">Connect to us on Social Media</h4>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
