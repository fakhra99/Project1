import Footer from "./AdminFooter";
import Header from "./AdminHeader";
import React from "react";
import { Container } from "react-bootstrap";

const AdminMainLayout = ({ children }) => {
    return (
        <div>
            <Header />


            <main className="py-5" style={{ minHeight: '60vh' }}>
                <Container className="d-flex justify-content-center align-items-center">
                    {children}
                </Container>
            </main>


            <Footer />

        </div>
    );
};

export default AdminMainLayout;
