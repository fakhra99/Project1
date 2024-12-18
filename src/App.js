import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdminMainLayout from "./layouts/admin/AdminMainLayout";
import FrontendMainLayout from "./layouts/frontend/FrontendMainLayout";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Routes>

          <Route path="/admin/*" element={<AdminMainLayout />} />


          <Route path="/*" element={<FrontendMainLayout />} />

        </Routes>
      </Router>



    </>
  );
}

export default App;
