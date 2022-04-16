
import { FC } from 'react';

import { EnrollmentCourse } from '../../interfaces/';

interface Props {
  course: EnrollmentCourse;
}


export const CourseRow: FC<Props> = ({ course }) => {
  return (
    <tr>
      <td>{ course.name}</td>
      <td>{ course.professor.name }</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-success"
        >
          Enroll
        </button>
      </td>
    </tr>
  )
}
