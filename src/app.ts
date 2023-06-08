import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { UserRoutes } from "./app/modules/user/user.route";
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
app.use("/api/v1/users/", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to your Dream University Dashboard !");
});

//Testing
// app.get("/test",  (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, "Custom Error ");
// });

//global error handler
app.use(globalErrorHandler);

export default app;
