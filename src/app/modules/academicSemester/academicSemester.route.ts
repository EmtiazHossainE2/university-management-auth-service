import express from "express";

import { AcademicSemesterValidation } from "./academicSemester.validation";
import validateRequest from "../../middleware/validateRequest";
import { AcademicController } from "./academicSemester.controller";
const router = express.Router();

router.post(
  "/create-semester",
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicController.createSemester
);

export const AcademicSemesterRoutes = router;
