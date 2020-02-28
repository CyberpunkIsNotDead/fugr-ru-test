import React from 'react';
//import { useState } from 'react';

// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(false);

let data = []

const url = process.env.REACT_APP_FETCH_URL_SMALL;

const fetchData = async (url) => {
  console.log(url)
  const response = await fetch(url);
  console.log(response)

  if (response.ok) {
    data = await response.json();
  } else {
    throw new Error(
      `Error while data fetching. Server response:${response.status}`
      )
  }
};

export const DataTable = () => {

  fetchData(url);

  // const data = [
  //   {
  //     id: 101,
  //     firstName: 'Sue',
  //     lastName: 'Corson',
  //     email: 'DWhalley@in.gov',
  //     phone: '(612)211-6296',
  //     address: {
  //       streetAddress: '9792 Mattis Ct',
  //       city: 'Waukesha',
  //       state: 'WI',
  //       zip: '22178'
  //     },
  //     description: 'et lacus magna dolor...',
  //   },
  //   {
  //     id: 102,
  //     firstName: 'Sue',
  //     lastName: 'Corson',
  //     email: 'DWhalley@in.gov',
  //     phone: '(612)211-6296',
  //     address: {
  //       streetAddress: '9792 Mattis Ct',
  //       city: 'Waukesha',
  //       state: 'WI',
  //       zip: '22178'
  //     },
  //     description: 'et lacus magna dolor...',
  //   },
  //   {
  //     id: 103,
  //     firstName: 'Sue',
  //     lastName: 'Corson',
  //     email: 'DWhalley@in.gov',
  //     phone: '(612)211-6296',
  //     address: {
  //       streetAddress: '9792 Mattis Ct',
  //       city: 'Waukesha',
  //       state: 'WI',
  //       zip: '22178'
  //     },
  //     description: 'et lacus magna dolor...',
  //   }
  // ]

  return (
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
          data.map((e, index) => (
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
};
