import React from "react";

const Dashboard = () => {
  return (
    <div className="container py-4 border rounded shadow bg-white my-4">
      {/* Wrapping the whole dashboard with Bootstrap classes */}
      <div className=" p-4">
        {/* Heading */}
        <h2 className="mb-5">AFCT</h2>

        {/* Buttons Section */}
        <div className="row mb-5 d-flex justify-content-evenly">
          <div className="col-auto">
            {/* Added mb-3 for margin between buttons */}
            <button className="btn btn-success px-5 w-100">
              Check Modules
            </button>
          </div>
          <div className="col-auto mb-3">
            {/* Added mb-3 for margin between buttons */}
            <button className="btn btn-outline-secondary px-5 w-100">
              New Patient - Getting Started
            </button>
          </div>
          <div className="col-auto mb-3">
            {/* Added mb-3 for margin between buttons */}
            <button className="btn btn-outline-secondary px-5 w-100">
              Resource Center
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="row shadow">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="bg-secondary text-light">Modules</th>
                  <th className="bg-secondary text-light">View</th>
                  <th className="bg-secondary text-light">View Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Our Services</td>
                  <td>
                    <button className="btn btn-success btn-sm">View</button>
                  </td>
                  <td>11-09-2024 08:10PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Text Section */}
        <div className="row mt-5 text-center">
          <div className="col-12">
            <p>
              Keep an eye on the uploaded modules on reactforwellness platform
            </p>
          </div>
          <div className="col-12">
            <p>Check resource center for additional information</p>
          </div>

          <div className="col-12">
            <p>ways to get in contact wit us</p>
          </div>
          <div className="col-12">
            <p>how to login menstrual cycle</p>
          </div>
          <div className="col-12">
            <p>how to make payments</p>
          </div>
          <div className="col-12">
            <p>our services</p>
          </div>
          <div className="col-12">
            <p>Lender and financing companies</p>
          </div>
          <div className="col-12">
            <p>how to upload medical records</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
