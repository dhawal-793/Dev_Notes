import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import userContext from "../context/Users/userContext";

const SIgnup = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES

  const context = useContext(userContext);
  const { signUp } = context;

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // METHODS

  const onchange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    signUp(userData);
    setUserData({
      name: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // RETURN

  return (
    <div className="custom-text">
      <div style={{
        paddingTop: "7vh"
      }}>

      </div>

      <div className="pb-2">
        <div className="container text-center lh-lg ">
          <h1 className="container fw-bold">
            <i> Ur Notes </i>
          </h1>
          <p className="fs-6">Your Notes secured on the cloud</p>
        </div>
        <div className="p-2 px-4 border border-light rounded-4 custom-shadow" style={{
          marginTop: "2vh",
          marginLeft: "7vw",
          marginRight: "7vw",
        }}>


          <h2 className="container py-2 mb-3 text-center">
            Sign Up to DevNotes
          </h2>
          <form>
            <div className="mb-2 form-floating ">
              <input
                type="text"
                className="form-control rounded-4 bg-opacity-10"
                id="name"
                name="name"
                value={userData.name}
                onChange={onchange}
                placeholder="name"
              />
              <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="mb-3 form-floating ">
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
            <div className="mb-3 form-floating">
              <input
                type="password"
                className="form-control rounded-4 bg-opacity-10"
                id="password"
                name="password"
                value={userData.password}
                onChange={onchange}
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="mb-3 form-floating">
              <input
                type="password"
                className="form-control rounded-4 bg-opacity-10"
                id="cpassword"
                name="cpassword"
                value={userData.cpassword}
                onChange={onchange}
                placeholder="Confirm Password"
              />
              <label htmlFor="floatingPassword">Confirm Password</label>
            </div>

            <div className="flex justify-content-between">
              <div>
                <button
                  type="submit"
                  className="btn-sm btn-bg-custom "
                  style={{ maxWidth: "8rem" }}
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
              <div className="py-2">
                <p>
                  Have an Account?
                  <Link type="submit" className="mx-1 custom-link" to="/login">
                    <b> Log In Here</b>
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

export default SIgnup;
