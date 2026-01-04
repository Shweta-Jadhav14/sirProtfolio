import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import ServiceDetails from "../pages/ServiceDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/service/:id" element={<ServiceDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
