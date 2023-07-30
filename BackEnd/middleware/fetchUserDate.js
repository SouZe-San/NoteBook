const jwt = require("jsonwebtoken");

//@ Signature  for Our JWT tokens
const JWT_SECRET = "y0bROTHER#Number$";

const fetchUserDate = (req, res, next) => {
  //  Get the user from JWT token and add Id to body of req

  // Get token form header of the req
  const token = req.header("authentic-token");

  if (!token) {
    // if token not present then send a bad requests
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    // Verify the token
    const tokenData = jwt.verify(token, JWT_SECRET);
    // if user verified then send user form token as request
    req.user = tokenData.user;

    // if all OK , run the next middleware if present or next function
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchUserDate;
