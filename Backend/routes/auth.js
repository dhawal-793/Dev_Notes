const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");
const fetchuser = require("../middleware/fetchuser");
require("dotenv").config();
const JWT_SIGNATURE = process.env.JWT_SIGNATURE;

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// ROUTE 1: Create  a User using:  POST -> "/api/auth/createuser" . Note: 'No Login Required'.
router.post(
  "/createuser",

  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be of minimum length 5").isLength({
      min: 5,
    }),
    body("cpassword", "Password must be of minimum length 5").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    //  If there is any error return error 400 status with the error
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success,
        message: "Enter Correct Credentials",
        errors: errors.array(),
      });
    }
    // Put everything inside the try block so that if any error occur then,
    // we can handle in the catch block
    try {
      // Check if there exists a user with this email id
      let user = await User.findOne({ email: req.body.email });
      // If exists then return error with message to use different email
      if (user) {
        return res
          .status(400)
          .json({ success, message: "Email is Already Registered" });
      }
      if (req.body.password !== req.body.cpassword) {
        return res
          .status(400)
          .json({ success, message: "Password does not match" });
      }
      // If the email is not already exists in the DB then
      // make a salt of 10 characters using bcrypt
      const salt = await bcrypt.genSalt(10);
      // make a securepassword using hash function with password entered by user and salt
      const securePass = await bcrypt.hash(req.body.password, salt);
      // create a user with user data and the password
      // which we have made in the previous step
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
      });
      const data = {
        user: { id: user.id },
      };
      // create a authtoken with the user id and your signature
      const authToken = jwt.sign(data, JWT_SIGNATURE);
      // Now return the auth token
      success = true;
      return res.json({
        success,
        message: "User Registered Successfully",
        authToken,
      });
      // res.json({ 'OK 200': 'User data successfully added','data':user });
    } catch (error) {
      // If any error occured then return status 500 with message Internal Server error
      console.log(error.message);
      return res.status(500).json({
        success,
        message: "Internal Server Error",
        errors: error.messsage,
      });
    }
  }
);

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// ROUTE 2: Authenticate a User  using:  POST -> "/api/auth/login" . Note: 'No Login Required'.

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    //  If there is any error return error 400 status with the error
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success,
        message: "Enter Correct Credentials",
        errors: errors.array(),
      });
    }
    // Using destructuring get the values of email and password
    const { email, password } = req.body;
    // Put everything inside the try block so that if any error occur then,
    // we can handle in the catch block
    try {
      // Check if there exists a user with this email id
      const user = await User.findOne({ email: email });
      // If doesn't exists then return error with message to use correct credentials
      if (!user) {
        return res
          .status(400)
          .json({ success, message: "try to log in with correct credentials" });
      }
      // Compare the password user has enered with the saved password
      // do not worry about hash and salt node js will take care care of that.
      const comparePassword = await bcrypt.compare(password, user.password);
      // If password doesn't match then return error with message to use correct credentials
      if (!comparePassword) {
        return res
          .status(400)
          .json({ success, message: "try to log in with correct credentials" });
      }

      //else  create a authtoken with the user id and your signature
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SIGNATURE);
      success = true;
      // Now return the auth token
      res.json({
        success,
        message: "User Logged In Successfully",
        authToken,
        data,
      });
    } catch (error) {
      // If any error occured then return status 500 with message Internal Server error
      return res
        .status(500)
        .json({ success, message: "Internal Server Error", errors: error });
    }
  }
);

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// ROUTE 3: Get loggedIn user details using:  POST "/api/auth/getuser". Note: 'Login Required'.

router.post("/getuser", fetchuser, async (req, res) => {
  let success = false;
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    // If doesn't exists then return error with message to use correct credentials
    success = true;
    return res.json({
      success,
      message: "User Data fetched Successfully",
      user,
    });
  } catch (error) {
    // If any error occured then return status 500 with message Internal Server error
    console.log(error.message);
    return res
      .status(500)
      .json({ success, message: "Internal Server Error", errors: error });
  }
});

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// EXPORT

module.exports = router;
