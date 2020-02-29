import React from 'react';


export const DataTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>email</th>
        <th>phone</th>
      </tr>
    </thead>
    <tbody>
      {
        !props.loading ? props.data.map((e, index) => (
            <tr key={index}>
              <td>{e.id}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
            </tr>
          )) : <tr><td>loading...</td></tr>
      }
    </tbody>
  </table>
);
