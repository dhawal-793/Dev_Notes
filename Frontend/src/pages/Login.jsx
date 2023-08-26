import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/Users/userContext";

const Login = () => {
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
  /* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

  // VARIABLES

  const context = useContext(userContext);
  const { logIn } = context;

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
    <div className="w-full">
      <div
        style={{
          paddingTop: "7vh",
        }}
      ></div>

      <div className="pb-2 maxHeight-30rem">
        <div className="container text-center lh-lg ">
          <h1 className="container fw-bold">
            <i> Ur Notes </i>
          </h1>
          <p className="fs-6">Your Notes secured on the cloud</p>
        </div>
        <div
          className="p-2 px-4 border border-light rounded-4 custom-shadow "
          style={{
            marginTop: "2vh",
            marginLeft: "7vw",
            marginRight: "7vw",
          }}
        >
          <h2 className="container py-2 mb-3 text-center">Log In to DevNotes</h2>
          <form>
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

            <div className="flex py-2 justify-content-between">
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
                  <Link type="submit" className="mx-1 custom-link" to="/signup">
                    <b> Sign Up Here</b>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="py-3"> </div> */}
    </div>
  );
};

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

export default Login;
