import React from "react";
import { Button, Col, Container, Form, Image, ProgressBar, Row } from "react-bootstrap";

const Signup = () => {
    return (
        <Container fluid className="py-5" style={{ maxWidth: '1000px' }}>
            <h2 className="fw-bold mb-4">Signup</h2>
            {/* Progress Stepper */}
            <Row className="mb-4">
                <Col xs={6} className="d-flex align-items-center">
                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#5F826A',
                            color: 'white',
                        }}
                    >
                        &#10003;
                    </div>
                    <span
                        style={{ marginLeft: '10px', color: '#5F826A', fontWeight: '600' }}
                    >
                        Step 1
                    </span>
                </Col>
                <Col xs={6} className="d-flex align-items-center">
                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center border"
                        style={{
                            width: '32px',
                            height: '32px',
                            color: '#5F826A',
                            borderColor: '#5F826A',
                        }}
                    >
                        02
                    </div>
                    <span style={{ marginLeft: '10px', color: '#777777' }}>Step 2</span>
                </Col>
            </Row>

            {/* Main Content */}
            <Row className="align-items-center">
                {/* Form Section */}
                <Col md={6} className="p-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                style={{ padding: '15px', borderRadius: '10px', borderColor: '#ccc' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                style={{ padding: '15px', borderRadius: '10px', borderColor: '#ccc' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                style={{ padding: '15px', borderRadius: '10px', borderColor: '#ccc' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                style={{ padding: '15px', borderRadius: '10px', borderColor: '#ccc' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="confirmPassword">
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                style={{ padding: '15px', borderRadius: '10px', borderColor: '#ccc' }}
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            className="w-100"
                            style={{
                                backgroundColor: '#5F826A',
                                borderColor: '#5F826A',
                                padding: '10px',
                                fontSize: '1rem',
                                borderRadius: '10px',
                            }}
                        >
                            Signup
                        </Button>
                    </Form>
                </Col>

                {/* Image Section */}
                <Col md={6} className="p-0">
                    <Image
                        src="https://via.placeholder.com/500" // Replace with actual image URL
                        alt="signup"
                        fluid
                        rounded
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
