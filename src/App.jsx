import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./screen/contact/Contact";
import About from "./screen/about/About";
import Description from "./screen/bookdescription/Description";
import ScrollToTop from "./components/scrolltop/ScrollTop";
import Dashboard from "./components/dashboard/Dashboard";
import UploadBooks from "./components/admin/UploadBooks";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-details/:id" element={<Description />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-upload" element={<UploadBooks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
