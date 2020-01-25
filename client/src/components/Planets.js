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

function Planets() {

  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'population', title: 'Population' },
    { name: 'terrain', title: 'Terrain' },
    { name: 'climate', title: 'Climate' },    
    { name: 'gravity', title: 'Gravity' },
  ]);
  const [rows, setRows] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/planets/").then((res) => {
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

export default Planets;
