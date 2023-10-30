import { Routes, Route, BrowserRouter } from "react-router-dom";
import Invoice from "../Pages/Invoice";
import Profile from "../Pages/Profile";
import Project from "../Pages/Profile/Product";
import Contact from "../Pages/Profile//Contact";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
