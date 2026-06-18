import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Universities from "./pages/Universities";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities/:country" element={<Universities />} />
      </Routes>
    </BrowserRouter>
  );
}
