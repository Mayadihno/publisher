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
import Books from "./components/admin/Books";
import Editbook from "./components/admin/Editbook";
import PRoute from "./components/protected/PRoute";

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
        <Route path="/*" element={<PRoute />}>
          <Route path="admin-dashboard" element={<Dashboard />} />
          <Route path="admin-upload" element={<UploadBooks />} />
          <Route path="admin-books" element={<Books />} />
          <Route path="admin-edit-book/:id" element={<Editbook />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
