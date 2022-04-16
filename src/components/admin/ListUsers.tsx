import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state/reducers/rootReducer';

export const ListUsers = () => {

  const { users } = useSelector( (state: State) => state.admin );
  return (
    <div>
      <h2> All Users</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>UID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map( user => (
              <tr key={ user.uid }>
                <td>{ user.uid}</td>
                <td>{ user.name}</td>
                <td>{ user.email }</td>
                <td>{ user.role.name }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
