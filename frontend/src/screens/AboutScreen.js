import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutScreen = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">About Our Company</h1>
      <p className="lead text-center">Our company is a leading provider of innovative solutions in the industry. We have a team of experienced professionals who are dedicated to delivering high-quality products and services to our customers. Our mission is to help our clients achieve their goals and succeed in their businesses.</p>
      <p className="lead text-center">We offer a wide range of products and services, including product development, software engineering, and technical support. Our commitment to excellence and customer satisfaction has earned us a reputation as a reliable and trusted partner in the industry.</p>
      <div className="d-flex justify-content-center">
        <img src="https://m.media-amazon.com/images/I/31epF-8N9LL.png" alt="Company Logo" className="img-fluid" />
      </div>
      
    </div>
  );
}

export default AboutScreen;
