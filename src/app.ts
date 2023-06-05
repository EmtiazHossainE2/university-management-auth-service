import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import usersRouter from "./app/modules/users/users.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
app.use("/api/v1/users/", usersRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to your Dream University Dashboard !");
});

// Test Route
// app.get("/test", async (req: Request, res: Response) => {
//   await usersService.createUser({
//     id: '310',
//     role: 'admin',
//     password:"yoyobaba"
//   })
//   res.send("Welcome to test route");
// });

// //Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // throw new ApiError(400, 'yo Error ')
//   // next('Yoyo  Error') // Error
// })

//global error handler
app.use(globalErrorHandler);

export default app;
