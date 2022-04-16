import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { Student, ProfessorStudentsRes } from '../../interfaces/';
import { fetchWithToken } from '../../utils/';


export const ProfessorCourse = () => {

  // hooks
  const [isCheckCourseReq, setIsCheckCourseReq] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseStudents, setCourseStudents] = useState<Student[] | null>(null);

  const { courseId } = useParams() as { courseId: string; };
  const history = useHistory()

  useEffect(() => {
    const getCourseStudents = async() => {
      try {
  
        const resp = await fetchWithToken(`/persons/courses/${ courseId }`);
        const body = await resp.json() as ProfessorStudentsRes;
        if( body.ok ) {
          const students: Student[]   = body.alumnos.map( enrollment => ( enrollment.student));
          setCourseStudents( students );
          setCourseName( body.alumnos[0].course.name )
        } else {
          Swal.fire('Error', body.msg, 'error' );
        }
      } catch (err) {
        console.log(err)
      } finally {
        setIsCheckCourseReq( true );
      }
    }
    getCourseStudents();
  }, [courseId]);

  // functions 
  const handleBackButtonClick = () => {
    history.push('/professor/courses/')
  }

  if( !isCheckCourseReq) {
    return <h2> loading...</h2>
  }
  return (
    <>
      <div className="row">
        <div className="col-10">
          <h2> Course: { courseName}</h2>
        </div>
        <div 
          className="col-2"
          style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}
        >
          <button
            className="btn btn-secondary"
            onClick={ handleBackButtonClick }
          >Back</button>
        </div>
      </div>
      {
        !courseStudents
          ?(<p>Error al cargar informacion</p>)
          :(courseStudents.length === 0)
            ?(<p>No hay alumnos inscritos</p>)
            :
            (
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th> Student Id</th>
                    <th> Student</th>
                    <th> Student email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    courseStudents.map( student => (
                      <tr key={ student._id }>
                        <td>{ student._id }</td>
                        <td>{ student.name }</td>
                        <td>{ student.email }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
      }
    </>
  )
}
