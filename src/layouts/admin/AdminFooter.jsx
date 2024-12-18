import React from "react";
import { Container } from "react-bootstrap";

const AdminFooter = () => {
    return (
        <footer className="bg-light text-center py-3 border-top">
            <Container>
                <p className="mb-0" style={{ color: '#777777' }}>
                    &copy; {new Date().getFullYear()} Reach for Wellness. All Rights Reserved.
                </p>
            </Container>
        </footer>
    );
};

export default AdminFooter;
