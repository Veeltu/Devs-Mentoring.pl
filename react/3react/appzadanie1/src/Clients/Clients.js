import * as React from "react";
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

import { useState, useEffect } from "react";

import Form from "../Form/form";

// ZADANIE :

// 1. Clients, która:
//OK     Wyświetli na stronie wszystkich klientów,
//OK     Umożliwi usuwanie klienta,
//     Umożliwi edycję klienta,
//     Formularz do dodawania klienta,

// Formularz do dodawania i edycji będzie posiadał pola (w nawiasie walidacja):
// Name (nie może być krótszy niż 4 znaki, nie może być liczbą),
// Surname (nie może być krótszy niż 5 znaków, nie może być liczbą),
// Email (nie może być czymś innym niż email),

export default function Clients() {

  // Get data
  const [data, setData] = useState([]);
  
  const getData = () => {
    // POST(dodaj nowe), PUT(modyfikuj), DELETE(usun), GET => AXIOS
    fetch("http://localhost:3000/clients", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson);
        setClients(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);


  // Remove element from list onclick
  const [clients, setClients] = useState([]);

  const removeElement = (id) => {
    const newClients = clients.filter((client) => client.id !== id); //todo: how it works ?
    setClients(newClients);
  };

  // reset list

  const resetList = () => {
    setClients(data);
  };

  // pull data from Form.js
  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }

  return (
    <div>
      <h1>Clients</h1>

      <Button
        variant="outlined"
        children={<RefreshIcon />}
        onClick={resetList}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">surname</TableCell>
              <TableCell align="center">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((row, id) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.surname}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    children={<DeleteIcon />}
                    onClick={() => removeElement(row.id)}
                  ></Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    children={<DeleteIcon />}
                    onClick={() => removeElement(row.id)}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Form func={pull_data}/>
    </div>
  );
}
