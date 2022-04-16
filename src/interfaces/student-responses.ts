/* 
  GET
  Courses - Get All Courses where Student Enrollment
  {{url}}/api/courses/enrollment/6235ddd58dfd24e0592436a1
 */
// Generated by https://quicktype.io

export interface StudentEnrollmentRes {
  ok:                boolean;
  msg:               string;
  enrollmentCourses: EnrollmentCourse[];
}

export interface EnrollmentCourse {
  name:      string;
  professor: Professor;
  id:        string;
}

export interface Professor {
  _id:  string;
  name: string;
}

/* 
GET
Courses - Get All Courses where Student Not Enrollment
{{url}}/api/courses/no-enrollment/6235ddd58dfd24e0592436a1
*/
// Generated by https://quicktype.io
export interface StudentNoEnrollmentRes {
  ok:                   boolean;
  msg:                  string;
  notEnrollmentCourses: NotEnrollmentCourse[];
}

export interface NotEnrollmentCourse {
  name:      string;
  professor: Professor;
  id:        string;
}

export interface Professor {
  _id:  string;
  name: string;
}
