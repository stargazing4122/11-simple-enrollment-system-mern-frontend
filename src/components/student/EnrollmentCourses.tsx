import { useSelector } from "react-redux"
import { State } from "../../state/reducers/rootReducer";
import { CourseEnrollmentRow } from "./";


export const EnrollmentCourses = () => {
  
  const { enrollments } = useSelector( (state: State) => state.student );
  return (
    <>
      <h2>Enrollment Courses</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Course</th>
            <th>Professor</th>
          </tr>
        </thead>
        <tbody>
          {
            enrollments?.map( course => (
              <CourseEnrollmentRow
                key={ course.id }
                course={ course }
              />
            ))
          }
        </tbody>
      </table>
    </>
  )
}
