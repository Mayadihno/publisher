import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
