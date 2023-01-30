import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useState, useEffect } from "react";

// ZADANIE :

// 1. Clients, która:
//     Wyświetli na stronie wszystkich klientów,
//     Umożliwi usuwanie klienta,
//     Umożliwi edycję klienta,
//     Formularz do dodawania klienta,

// Formularz do dodawania i edycji będzie posiadał pola (w nawiasie walidacja):
// Name (nie może być krótszy niż 4 znaki, nie może być liczbą),
// Surname (nie może być krótszy niż 5 znaków, nie może być liczbą),
// Email (nie może być czymś innym niż email),

//todo: how fetch data from json  ?

export default function Clients() {
  const [data, setData] = useState([]);
  const getData = () => { // POST(dodaj nowe), PUT(modyfikuj), DELETE(usun), GET => AXIOS
    fetch("http://localhost:3000/clients", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // console.table(data);

  return (
    <div>
      <h1>Clients</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">surname</TableCell>
              <TableCell align="right">email</TableCell>
            </TableRow>
          </TableHead>
           <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.surname}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
