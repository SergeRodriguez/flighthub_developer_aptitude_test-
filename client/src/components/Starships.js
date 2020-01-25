import React, { useState, useEffect } from 'react';
import axios from "axios"
import Loader from "react-loader-spinner";
import "./Loader.scss";

import {
  SearchState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';

import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

const getRowId = row => row.id;

const TableComponent = ({ ...restProps }) => (
  <Table.Table
    {...restProps}
    className="table-hover table-bordered"
  />
);

function Starships() {

  const [columns] = useState([
    { name: 'name', title: 'Starship' },
    { name: 'starship_class', title: 'Class' },
    { name: 'model', title: 'Model' },
    { name: 'manufacturer', title: 'Manufacturer' },
    { name: 'passengers', title: 'Capacity for Passengers' },
  ]);
  const [rows, setRows] = useState([]);
  const [searchValue, setSearchState] = useState('');


  useEffect(() => {
    axios.get("http://localhost:3001/starships/").then((res) => {
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
          <SearchState
            value={searchValue}
            onValueChange={setSearchState}
          />
          <IntegratedFiltering />

          <Table
            tableComponent={TableComponent}
          />
          <TableHeaderRow />
          <Toolbar />
          <SearchPanel />
        </Grid>
      </div>
  );
}

export default Starships;
