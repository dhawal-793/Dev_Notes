const jwt = require("jsonwebtoken");
require("dotenv").config();

const fetchuser = (req, res, next) => {
  //Get the token from request header
  const token = req.header("auth-token");
  // if token not found return status 401 with message  to authenticate using correct credentials
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Please Authenticate using correct Credentials" });
  }

  try {
    // verify the token with your signature
    const data = jwt.verify(token, process.env.JWT_SIGNATURE);
    //  add id to req object
    req.user = data.user;
    next();
  } catch (error) {
    // If any error occured then return status 401 with message to authenticate using correct credentials
    return res
      .status(401)
      .json({ success: false, message: "Please Authenticate using correct Credentials" });
  }
};
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

module.exports = fetchuser;
