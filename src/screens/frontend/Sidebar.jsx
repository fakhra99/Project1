import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="vh-100 ms-5 mt-4 d-flex align-items-start">
      {/* Wrapper Div with Border and Padding */}
      <div className="p-3 border rounded w-100 bg-white">
        <div className="vh-100 border-end bg-light">
          {/* Gray Background Section */}
          <div className="bg-secondary p-3 rounded">
            <h4 className="fw-bold text-white">Active Memberships</h4>
            <Nav defaultActiveKey="/afct" className="flex-column mt-3">
              <Nav.Link href="#" className="text-light">
                Lovistal Lifestyle
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                Fertility
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                Blood Sugar
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                Selinder Me
              </Nav.Link>
              <Nav.Link href="#" className="text-light fw-bold active">
                AFCT
              </Nav.Link>
            </Nav>
          </div>

          {/* Lighter Section */}
          <div className="bg-light mt-3 p-3 rounded">
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-dark">
                Overview
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                Orders
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                All Memberships
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                Subscriptions
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                Rewards & Points
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                Events
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                Shipping History
              </Nav.Link>
              <Nav.Link href="#" className="text-dark">
                Profile
              </Nav.Link>
            </Nav>

            {/* Logout Section */}
            <div className="mt-5">
              <Nav.Link href="#" className="fw-bold text-danger">
                Logout
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
