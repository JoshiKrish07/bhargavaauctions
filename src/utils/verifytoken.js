import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_LOGIN_KEY);
    console.log("=====decoded====>", decoded);
    return decoded;
  } catch (error) {
    // if token is expired
    if (error.name === "TokenExpiredError") {
      throw new Error("Token has expired");
    }
    throw new Error("Invalid token");
  }
};
