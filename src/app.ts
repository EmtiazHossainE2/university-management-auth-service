import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import usersRouter from "./app/modules/users/users.route";

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

export default app;
