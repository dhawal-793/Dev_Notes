import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/Users/userContext";
import Alert from "./Alert";

const Login = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES

  const context = useContext(userContext);
  const { logIn, alert } = context;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  const onchange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    logIn(userData);
    setUserData({
      email: "",
      password: "",
    });
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <div className="custom-text">
      <div
        className=" relative sticky-top "
        style={{
          minHeight: "2vh",
          maxHeight: "2.1vh",
          // zIndex:"99",
          paddingTop: "2rem",
          marginTop: "1.9rem",
        }}
      >
        {alert.show && <Alert type={alert.type} message={alert.message} />}
      </div>

      <div
        style={{
          paddingTop: "7vh",
        }}
      ></div>

      <div className="pb-2 maxHeight-30rem">
        <div className="container text-center lh-lg ">
          <h1 className="fw-bold container">
            <i> Ur Notes </i>
          </h1>
          <p className="fs-6">Your Notes secured on the cloud</p>
        </div>
        <div
          className=" border border-light rounded-4 custom-shadow p-2 px-4"
          style={{
            marginTop: "2vh",
            marginLeft: "7vw",
            marginRight: "7vw",
          }}
        >
          <h2 className="container text-center mb-3 py-2">Log In to UrNotes</h2>
          <form>
            <div className="form-floating mb-3 ">
              <input
                type="email"
                className="form-control rounded-4 bg-opacity-10"
                id="email"
                name="email"
                value={userData.email}
                onChange={onchange}
                placeholder="E-mail"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control  rounded-4  bg-opacity-10"
                id="password"
                name="password"
                value={userData.password}
                onChange={onchange}
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="flex justify-content-between py-2">
              <div>
                <button
                  type="submit"
                  className="btn-sm btn-bg-custom "
                  style={{ maxWidth: "8rem" }}
                  onClick={handleLogIn}
                >
                  Log In
                </button>
              </div>
              <div className="py-2">
                <p>
                  Don't have an Account?
                  <Link type="submit" className="custom-link mx-1" to="/signup">
                    <b> Sign Up Here</b>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="py-3"> </div>
    </div>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Login;
