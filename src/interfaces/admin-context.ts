import { Course, Matricula, Person } from "./";

export interface FullAdminState {
  enrollments: Matricula[];
  users: Person[];
  courses: Course[];
}