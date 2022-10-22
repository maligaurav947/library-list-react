import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactForm from "./Pages/ContactForm.js";
import LibaryList from "./Pages/LibaryList";
import "../dist/css/main.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<LibaryList />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactForm />} />
      </Routes>
    </HashRouter>
  );
}
