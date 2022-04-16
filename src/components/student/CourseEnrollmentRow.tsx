
import { FC } from 'react';

import { EnrollmentCourse } from '../../interfaces';

interface Props {
  course: EnrollmentCourse;
}


export const CourseEnrollmentRow: FC<Props> = ({ course }) => {
  return (
    <tr>
      <td>{ course.id}</td>
      <td>{ course.name}</td>
      <td>{ course.professor.name }</td>
    </tr>
  )
}
