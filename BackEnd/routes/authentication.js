//@ Load All Necessary Modules
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@ Load Own-Create Module
const User = require("../models/User");

// @ MiddleWares
const fetchUserDate = require("../middleware/fetchUserDate");

//@ Signature  for Our JWT tokens
const JWT_SECRET = "y0bROTHER#Number$";

//@  ROUTER-1:  for Create User --  {'Path', [Validation], callBack()}
//^ the Path of this request : /api/auth/createaccount

router.post(
  "/createaccount",
  [
    // username must be At least 3 chars
    body("username", "Enter a Valid UserName").isLength({ min: 3 }),
    // password must be At least 6 chars
    body("password", "Correct the Password, is must in least 6 character").isLength({ min: 6 }),
    // Email Check
    body("email", "Enter a Valid Email").isEmail().normalizeEmail(),
  ],
  async (req, res) => {
    // IF Finds the validation errors in this request,  send 400 bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check Whether same Email Already exist Or Not
      let user = await User.findOne({ email: req.body.email }); // this method return a full doc(obj) if exist
      if (user) {
        return res.status(404).json({ error: "Sorry! this Email is Already exist" });
      }

      // Check Whether same UserName Already exist Or Not
      user = await User.findOne({ username: req.body.username });
      if (user) {
        return res.status(404).json({ error: "Sorry! this UserName is been Already Used " });
      }

      // Generate salt using package ... the salt is about 10 char
      const salt = await bcrypt.genSalt(10); /// we can use sync of this

      // Using Password from user and salt create the hash of that string
      var securePassword = await bcrypt.hash(req.body.password, salt);

      // Create User and Send Data in Database if All OK-- in Our Schema Formate
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: securePassword,
      });

      // data that wil be hidden in token
      const tokenData = {
        user: {
          id: user.id,
        },
      };
      // Create a token for user , and by using that user can access his account
      const authenticationToken = jwt.sign(tokenData, JWT_SECRET);

      // This is Response that send to client
      res.json({ authenticationToken });
    } catch (error) {
      // For Now Just Error Show In Terminal because we have to Repair it
      console.log(error.massage);
      res.status(500).send("Some Internal Server Error Occurred");
    }

    // As tha function write as async and stored variables are await , so no need to .then for promise resolving
  }
);

// *-- ------- ------- ---------- --------- ---- ------ -
//@  ROUTER-2: for User Log in
//^ the Path of this request : /api/auth/login

router.post(
  "/login",
  [
    body("email", "Enter a Valid Email").isEmail(), // check Is It a email or not
    body("password", "Enter a valid Password").exists(), // And Pass Can't leave blank
  ],
  async (req, res) => {
    // IF Finds the validation errors in this request,  send 400 bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract the email and password from body
    const { email, password } = req.body;

    try {
      // Check Whether same Email Already exist in Db Or Not ---
      let user = await User.findOne({ email });
      if (!user) {
        // If the email doesn't present in db
        return res.status(404).json({ error: "Sorry! Email and Password Is Invalid" });
      }

      // Check Is the Password Is matching or not ----
      const passCheck = await bcrypt.compare(password, user.password); // check pass match or not
      if (!passCheck) {
        return res.status(404).json({ error: "Sorry! Email and Password Is Invalid" });
      }

      // If all then Ready a token that will send to the user
      const tokenData = {
        user: {
          id: user.id,
        },
      };

      // Create the token That send to User
      const authenticationToken = jwt.sign(tokenData, JWT_SECRET);

      // Send Token As response

      res.json({ authenticationToken });
    } catch (error) {
      // Error If Server/API have Get Some Problem
      console.log(error);
      res.status(500).send("Some Internal Server Error Occurred");
    }
  }
);

// *-- ------- ------- ---------- --------- ---- ------ -
//@  ROUTER -3: for get User Data/details (Log In Required)
//^ the Path of this request : /api/auth/getuser

router.post("/getuser", fetchUserDate, async (req, res) => {
  // After fetch id from the token
  try {
    // get user id form the token using middleware
    const userId = req.user.id;

    //  Find User by UserID
    const user = await User.findById(userId).select("-password"); // by this select() set -> select fields except password

    // send user details
    res.send(user);
  } catch (error) {
    // Error If Server/API have Get Some Problem
    console.log(error);
    res.status(500).send("Some Internal Server Error Occurred");
  }
});

module.exports = router;
