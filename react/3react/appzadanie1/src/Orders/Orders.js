// 2. Orders, która:
// Wyświetli na stronie wszystkie zamówienia,
// Umożliwi oznaczanie zamówienia jako gotowe,
// Umożliwi usuwanie zamówienia,
// Formularz do dodawania nowego zamówienia

// Formularz do dodawania zamówienia będzie posiadał pole (w nawiasie walidacja):
// Order-details (nie może być krótsze niż 7 znaków)

import * as React from "react";
import AddNewOrder from "./Form/addOrderForm.js"

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";

import ControlledCheckbox from "./checkbox.js";

import { useState, useEffect } from "react";

import axios from "axios";

const url = "http://localhost:3000/order";

function Orders() {
  // data
  const [jsonData, setJsonData] = useState([]);

  //fetch data
  const getData = async () => {
    try {
      const resp = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJsonData(resp.data);
    } catch (error) {
      console.log(error.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //delete client function
  const deleteClient = async (id) => {
    await axios.delete(`http://localhost:3000/order/${id}`);
    getData();
  };

  // add to list random client **for testing**
  const resetList = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, {
        id: "",
        order: "makaron",
        isReady: "ture",
      });
      getData();
    } catch (error) {
      console.log(error.resp);
    }
  };

  // toggle add to list json newClient
  const [isOpened, setIsOpened] = useState(false);

  function toggleAdd() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div>
      <h1>Orders</h1>
      <Button
        variant="outlined"
        children={<RefreshIcon />}
        onClick={resetList}
      />
      <Button variant="outlined" children={<AddIcon />}  onClick={toggleAdd} />
      {isOpened && (
        <AddNewOrder toggle={toggleAdd} refresh={getData}/>
      )}


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">order-details</TableCell>
              <TableCell align="center">isReady</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jsonData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.order}</TableCell>
                {/* <TableCell align="center">{row.isReady}</TableCell> */}
                <TableCell align="center">
                  <ControlledCheckbox 
                  row={row}
                  refresh={getData}
                  />
                  </TableCell>

                <TableCell align="center">
                  <Button
                    variant="outlined"
                    children={<DeleteIcon />}
                    onClick={() => deleteClient(row.id)}
                  ></Button>

                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Orders;
