import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const ContactAndSupport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send("service_nryzz3c", "template_8tjvdea", { name, email, message }, "iTB7O6PKyf7e9vixk")
      .then(res => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setSubmitError(null);
      })
      .catch(err => {
        setIsSubmitting(false);
        setSubmitSuccess(false);
        setSubmitError(err);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-5">Contact and Support</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={event => setName(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" value={message} onChange={event => setMessage(event.target.value)} />
            </Form.Group>
            {submitSuccess && (
              <p className="text-success">Your message was sent successfully!</p>
            )}
            {submitError && (
              <p className="text-danger">An error occurred while sending your message: {submitError.message}</p>
            )}
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactAndSupport;