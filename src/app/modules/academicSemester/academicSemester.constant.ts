import {
  IAcademicSemesterCodes,
  IAcademicSemesterMonths,
  IAcademicSemesterTitles,
} from "./academicSemester.interface";

export const academicSemesterTitles: IAcademicSemesterTitles[] = [
  "Summer",
  "Fall",
];

export const academicSemesterCodes: IAcademicSemesterCodes[] = ["01", "02"];

export const academicSemesterMonths: IAcademicSemesterMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Summer: "01",
  Fall: "02",
};

export const academicSemesterSearchableFields = ["title", "code", "year"];

export const academicSemesterFilterableFields = [
  "searchTerm",
  "title",
  "code",
  "year",
];
