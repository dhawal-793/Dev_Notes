import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
              data-mdb-toggle="collapse"
              to="#collapseExample1"
              aria-expanded="true"
              aria-controls="collapseExample1"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Expanded menu</span>
            </Link>
            <ul
              id="collapseExample1"
              className="collapse show list-group list-group-flush"
            >
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  Link
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  Link
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  Link
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  Link
                </Link>
              </li>
            </ul>
            <Link
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
              data-mdb-toggle="collapse"
              to="#collapseExample2"
              aria-expanded="true"
              aria-controls="collapseExample2"
            >
              <i className="fas fa-chart-area fa-fw me-3"></i>
              <span>Collapsed menu</span>
            </Link>
            <ul
              id="collapseExample2"
              className="collapse list-group list-group-flush"
            >
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  Link
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  Link
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  Link
                </Link>
              </li>
              <li className="list-group-item py-1">
                <Link to="" className="text-reset">
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link className="navbar-brand" to="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="25"
              alt="MDB Logo"
              loading="lazy"
            />
          </Link>
          <form className="d-none d-md-flex input-group w-auto my-auto">
            <input
              autocomplete="off"
              type="search"
              className="form-control rounded"
              placeholder='Search (ctrl + "/" to focus)'
              style={{ minWidth: "225px" }}
            />
            <span className="input-group-text border-0">
              <i className="fas fa-search"></i>
            </span>
          </form>

          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item dropdown">
              <Link
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Some news
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another news
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-3 me-lg-0" to="/">
                <i className="fas fa-fill-drip"></i>
              </Link>
            </li>

            <li className="nav-item me-3 me-lg-0">
              <Link className="nav-link" to="/">
                <i className="fab fa-github"></i>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                to="/"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="flag-united-kingdom flag m-0"></i>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-united-kingdom flag"></i>English
                    <i className="fa fa-check text-success ms-2"></i>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-poland flag"></i>Polski
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-china flag"></i>中文
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-japan flag"></i>日本語
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-germany flag"></i>Deutsch
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-france flag"></i>Français
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-spain flag"></i>Español
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-russia flag"></i>Русский
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i className="flag-portugal flag"></i>Português
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  className="rounded-circle"
                  height="22"
                  alt="Avatar"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    My profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Sidebar;
