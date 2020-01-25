import React, { useState, useEffect } from 'react';
import axios from "axios"
import Loader from "react-loader-spinner";
import "./Loader.scss";

import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

const getRowId = row => row.id;

function People() {

  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'birth_year', title: 'Birth Year' },
    { name: 'hair_color', title: 'Hair Color' },
    { name: 'skin_color', title: 'Skin Color' },
    { name: 'eye_color', title: 'Eye Color' }
  ]);
  const [rows, setRows] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/people/").then((res) => {
      setRows(res.data.map((row, index) => ({ ...row, id: index })))
    })
  }, [])

  return (
    rows.length === 0 ?
    <Loader className="position" color="#FFA500" width={200} height={200} type="Circles" />
      :
      <div className="card">
        <Grid
          rows={rows}
          columns={columns}
        >
          <Table />
          <TableHeaderRow />
        </Grid>
      </div>
  );
}

export default People;
