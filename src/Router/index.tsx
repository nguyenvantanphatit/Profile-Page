import { Routes, Route, BrowserRouter } from "react-router-dom";
import Invoice from "../Pages/Invoice";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}
