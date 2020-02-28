import React from 'react';
import { Link } from 'react-router-dom';
import { DataTable } from '../components/DataTable';

export const MainPage = (props) => (
  <>
    <div>
      <ul>
        <li><Link to='/page/1'>1</Link></li>
        <li><Link to='/page/2'>2</Link></li>
        <li><Link to='/page/3'>3</Link></li>
      </ul>
    </div>
    <DataTable />
    <div>
      {
        props.match.params.page ? props.match.params.page : 'none'
      }
    </div>
  </>
);
