import { Route, Routes } from "react-router-dom";

import NoteState from "@src/context/Notes/noteState";
import UserState from "@src/context/Users/userState";
import Navbar from "@src/components/navigation/Navbar";
import Footer from "@src/components/Footer";
import Login from "@src/pages/Login";
import SIgnup from "@src/pages/SIgnup";
import Home from "@src/pages/Home";
import Textutils from "@src/pages/Textutils";
import About from "@src/pages/About";
import ToastProvider from "@src/providers/ToastProvider";

import "./App.css";

const App = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN
  return (
    <>
      <UserState>
        <NoteState>
          <ToastProvider />
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
        </NoteState>
      </UserState>
    </>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default App;
