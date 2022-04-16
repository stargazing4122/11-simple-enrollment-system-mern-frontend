
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { NotEnrollmentCourse } from '../../interfaces/';
import { startEnrollOnCourse } from '../../state/actions/';

interface Props {
  course: NotEnrollmentCourse;
}


export const CourseNoEnrollmentRow: FC<Props> = ({ course }) => {
  // hooks
  const dispatch = useDispatch();

  // functions
  const handleEnrollClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, enroll it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( startEnrollOnCourse( course ));
      }
    })
  }
  return (
    <tr>
      <td>{ course.name}</td>
      <td>{ course.professor.name }</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={ handleEnrollClick }
        >
          Enroll
        </button>
      </td>
    </tr>
  )
}
