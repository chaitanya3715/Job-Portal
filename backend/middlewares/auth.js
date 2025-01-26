import { catchAsyncErrors } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new ErrorHandler("User Not Authorized", 401);
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new ErrorHandler("User Not Found", 404);
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
});
