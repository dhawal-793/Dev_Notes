import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo_Icons/DevNotes-32.png";
import Menu from "../Logo_Icons/Menu-32.png";
const Navbar = (props) => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES
  const location = useLocation();
  const navigate = useNavigate();
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {}, [location]);
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" />
          {props.title}
        </Link>
        <span
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={Menu} alt="" />
          {/* <i className="fa-solid fa-bars"></i> */}
        </span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/textutils" ? "active" : ""
                }`}
                to="/textutils"
              >
                TextUtils
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
            {localStorage.getItem("token") ? (
              <button className="btn-sm btn-bg-custom m-0 p-2" onClick={logout}>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>&nbsp; Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="link-btn-bg-custom nav-item btn-sm mx-1 p-2"
                  role="button"
                >
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>&nbsp; Login
                </Link>

                <Link
                  to="/signup"
                  className="link-btn-bg-custom btn-sm mx-1 p-2"
                  role="button"
                >
                  <i className="fa-solid fa-user-plus"></i>&nbsp; SignUp
                </Link>
              </>
            )}
        </div>
      </div>
    </nav>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Navbar;

/*

<a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div className="dropdown mt-3">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>


<span
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <img src={Menu} alt="" />
  // <i className="fa-solid fa-bars"></i> 
</span>

<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      I will not close if you click outside of me.
    </div>
  </div>
</div>



<button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

<div className="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>

<div className="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasResponsiveLabel"> <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" />
          {props.title}
        </Link></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/textutils" ? "active" : ""
                }`}
                to="/textutils"
              >
                TextUtils
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
          <form>
            {localStorage.getItem("token") ? (
              <button className="btn-sm btn-bg-custom m-0" onClick={logout}>
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="link-btn-bg-custom nav-item btn-sm mx-1"
                  role="button"
                >
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                </Link>

                <Link
                  to="/signup"
                  className="link-btn-bg-custom btn-sm mx-1"
                  role="button"
                >
                  <i className="fa-solid fa-user-plus"></i> SignUp
                </Link>
              </>
            )}
          </form>
  </div>
</div>








*/
