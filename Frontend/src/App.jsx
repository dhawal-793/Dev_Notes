import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Textutils from "./pages/Textutils";
import NoteState from "./context/Notes/noteState";
import { Route, Routes } from "react-router-dom";
import UserState from "./context/Users/userState";
import SIgnup from "./pages/SIgnup";
import Login from "./pages/Login";
import ToastProvider from "./providers/ToastProvider";

const App = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN
  return (
    <>
      <UserState>
        <NoteState>
          <ToastProvider/>
          <Navbar title={"DevNotes"} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/textutils" element={<Textutils />} />
              <Route exact path="/signup" element={<SIgnup />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
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
