import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Home from "@/pages/Home";
import Textutils from "@/pages/Textutils";
import About from "@/pages/About";
import Providers from "@/providers";

import "./App.css";

const App = () => {
  return (
    <Providers>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex-1 max-w-screen-2xl pt-[70px] mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/textutils" element={<Textutils />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Providers>
  );
};

export default App;
