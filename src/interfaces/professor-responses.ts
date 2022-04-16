// Generated by https://quicktype.io
/* 
  GET
  Courses - Get Cursos por Profesor
  {{url}}/api/courses/professor/62366100ec9c1639cbb445cb
*/
export interface ProfessorCoursesRes {
  ok:     boolean;
  msg:    string;
  cursos: Curso[];
}

export interface Curso {
  name:      string;
  professor: string;
  id:        string;
}


/* 
GET
People - Get Matriculados por Curso
{{url}}/api/persons/courses/6235f65274174011070057e1
*/
// Generated by https://quicktype.io

export interface ProfessorStudentsRes {
  ok:      boolean;
  msg:     string;
  alumnos: StudentEnrollment[];
}

export interface StudentEnrollment {
  student: Student;
  course:  ProfessorStudentCourse;
  id:      string;
}

export interface ProfessorStudentCourse {
  _id:  string;
  name: string;
}

export interface Student {
  _id:   string;
  name:  string;
  email: string;
}

