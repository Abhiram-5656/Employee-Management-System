const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    const decodedToken = jwt.verify(token, "secret_secret");

    req.userData = { userId: decodedToken.userId };

    next();

  } catch (err) {
    console.log("AUTH ERROR:", err);

    return res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};