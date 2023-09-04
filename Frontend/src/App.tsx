import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import Login from "@/pages/Login";
import SIgnup from "@/pages/SIgnup";
import Home from "@/pages/Home";
import Textutils from "@/pages/Textutils";
import About from "@/pages/About";
import Providers from "@/providers";

import "./App.css";

const App = () => {
  return (
    <Providers>
      <Navbar />
      <div className="w-full ">
        <div className="max-w-screen-xl pt-20 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/textutils" element={<Textutils />} />
            <Route path="/signup" element={<SIgnup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Providers>
  );
};

export default App;
