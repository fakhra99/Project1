import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import { FaCaretUp } from "react-icons/fa";

const Sidebar = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Toggle content visibility
  const handleToggle = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="w-50 ms-5 mt-4 d-flex align-items-start border rounded shadow bg-white mx-2">
      <div className=" border-end p-4 w-100">
        {/* Gray Background Section */}
        <div className="bg-secondary p-3 rounded">
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <h4 className="fw-bold text-white mb-0">Active Memberships</h4>
            <FaCaretUp
              className={`text-white ${isContentVisible ? "" : "rotate-180"}`} // Add rotation if hidden
              style={{ transition: "transform 0.3s" }}
            />
          </div>
          {isContentVisible && (
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
          )}
        </div>

        {/* Lighter Section */}
        <div className="  p-3 rounded">
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
            <Nav.Link href="#" className="fw-bold d-flex align-items-center">
              <FiLogOut className="me-2" /> {/* Logout icon */}
              Logout
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
