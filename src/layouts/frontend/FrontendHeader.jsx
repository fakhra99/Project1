import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

import {
    faSearch,
    faShoppingCart,
    faEnvelope,
    faBell,
} from '@fortawesome/free-solid-svg-icons';

const FrontendHeader = () => {
    return (
        <Navbar
            bg="light"
            expand="lg"
            className="border-bottom"
            style={{ padding: '10px 0' }}
        >
            <Container>
                {/* Logo Section */}
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <h3 className="mb-0" style={{ fontFamily: 'serif', fontWeight: '400' }}>
                        <span style={{ color: '#5F826A' }}>Reach for</span>{' '}
                        <span style={{ color: '#777777' }}>Wellness</span>
                    </h3>
                </Navbar.Brand>

                {/* Toggle for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#" className="mx-2">
                            Member Ships
                        </Nav.Link>
                        <Nav.Link href="#" className="mx-2">
                            My Memberships
                        </Nav.Link>
                        <Nav.Link href="#" className="mx-2">
                            Communities
                        </Nav.Link>
                        <Nav.Link href="#" className="mx-2">
                            Activity
                        </Nav.Link>
                    </Nav>

                    {/* Icons and User Avatar */}
                    <Nav className="d-flex align-items-center">
                        <Nav.Link href="#">
                            <FontAwesomeIcon icon={faSearch} size="lg" color="#777777" />
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" color="#777777" />
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#777777" />
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FontAwesomeIcon icon={faBell} size="lg" color="#777777" />
                        </Nav.Link>

                        {/* User Profile Avatar */}
                        <Nav.Link href="#" className="d-flex align-items-center">
                            <Image
                                src="https://via.placeholder.com/40" // Replace with actual profile image
                                roundedCircle
                                style={{ width: '40px', height: '40px' }}
                            />
                            <span className="ms-2" style={{ color: '#555555' }}>
                                dwjbi5
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default FrontendHeader;
