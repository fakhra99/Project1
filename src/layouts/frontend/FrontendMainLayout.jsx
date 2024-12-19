import Footer from "../../layouts/frontend/FrontendFooter";
import Header from "../../layouts/frontend/FrontendHeader";
import Sidebar from "../../screens/frontend/Sidebar";
import Home from "../../screens/frontend/Home";
import Signup from "../../screens/frontend/Signup";
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../../screens/frontend/MainLayout";

const FrontendMainLayout = () => {
  return (
    <div className="bg-light">
      {/* Header */}
      <Header />

      {/* Main Layout with Sidebar */}
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />
        <Dashboard/>

        {/* Main Content */}
        <main
          className="py-5 flex-grow-1"
          style={{ minHeight: "60vh", overflow: "auto" }}
        >
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Container>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FrontendMainLayout;