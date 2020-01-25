import React, { useState, useEffect } from 'react';
import axios from "axios"
import Loader from "react-loader-spinner";

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
    { name: 'starship_class', title: 'Starship Class' },
    { name: 'model', title: 'Model' },
    { name: 'manufacturer', title: 'Manufacturer' },    
    { name: 'passengers', title: 'Passenger Capacity' },
  ]);
  const [rows, setRows] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/starships/").then((res) => {
      setRows(res.data.map((row, index) => ({ ...row, id: index })))
    })
  }, [])

  return (
    rows.length ?
    <Loader type="Plane" color="#000000" height={300} width={300} />
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
