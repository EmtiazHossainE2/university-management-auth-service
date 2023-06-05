import { NextFunction, Request, Response } from "express";
import usersService from "./users.service";
import { errorLogger } from "../../../shared/logger";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.body;
    const result = await usersService.createUser(user);
    res.status(200).json({
      success: true,
      message: "User created successfully !",
      data: result,
    });
  } catch (error) {
    errorLogger.error(error);
    next(error);
  }
};
