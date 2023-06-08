import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <main>
      <section className="hero bg-primary text-white py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Welcome to Tech Solutions</h1>
              <p className="lead">Your Trusted IT Service Provider</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="services py-5">
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
          <Row>
            <Col md={4}>
              <Link to="/Login">
                <div className="service-card text-center p-3">
                  <div className="service-icon">
                    <img src="computer.jpg" alt="Service 1" className="img-fluid service-image" />
                  </div>
                  <h3 className="mt-3">Computer Repair</h3>
                  <p>Fast and reliable computer repair services.</p>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/login">
                <div className="service-card text-center p-3">
                  <div className="service-icon">
                    <img src="network-set.png" alt="Service 2" className="img-fluid service-image" />
                  </div>
                  <h3 className="mt-3">Network Setup</h3>
                  <p>Efficient network setup for your home or office.</p>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link to="/login">
                <div className="service-card text-center p-3">
                  <div className="service-icon">
                    <img src="data-repair.jpg" alt="Service 3" className="img-fluid service-image" />
                  </div>
                  <h3 className="mt-3">Data Recovery</h3>
                  <p>Secure data recovery solutions for lost or damaged files.</p>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <Row>
            <Col>
              <div className="testimonial text-center p-3">
                <img src="avatar1.jpg" alt="Customer 1" />
                <p className="mt-3">"Tech Solutions fixed my computer quickly and provided excellent customer service. Highly recommended!"</p>
                <span>- John Doe</span>
              </div>
            </Col>
            <Col>
              <div className="testimonial text-center p-3">
                <img src="avatar2.jpg" alt="Customer 2" />
                <p className="mt-3">"The network setup service from Tech Solutions was top-notch. Our office now has a reliable and secure network."</p>
                <span>- Jane Smith</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;