import "../dist/css/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import LibaryList from "./Pages/LibaryList";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/library-list-react/" element={<Home />} />
        <Route path="/library-list-react/List" element={<LibaryList />} />
        <Route path="/library-list-react/About" element={<About />} />
        <Route path="/library-list-react/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
