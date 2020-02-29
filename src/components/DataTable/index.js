import React from 'react';

export const DataTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>
          id
          <button onClick={() => {}}>sort</button>
          {/* dataState should be in context to implement this */}
        </th>
        <th>firstName</th>
        <th>lastName</th>
        <th>email</th>
        <th>phone</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map((e, index) => (
          <tr key={index}>
            <td>{e.id}</td>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.email}</td>
            <td>{e.phone}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);
