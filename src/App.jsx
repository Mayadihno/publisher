import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./screen/contact/Contact";
import About from "./screen/about/About";
import Description from "./screen/bookdescription/Description";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-details/:id" element={<Description />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
