import EditForm from "./Form/EditForm";
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
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { useState, useEffect } from "react";

import SignupForm from "./Form/Form";
import axios from "axios";
import { useParams } from "react-router";

import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "@mui/material";

const url = "http://localhost:3000/clients";

export default function Clients() {
  const { id } = useParams();
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
    await axios.delete(`http://localhost:3000/clients/${id}`);
    getData();
  };

  // add to list random client **for testing**
  const resetList = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        id: "",
        name: "Adam",
        surname: "Jochemczyk",
        email: "mymail@gmail.com",
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
  //toggle edit list
  const [editRow, setEditRow] = useState(null);

  return (
    <div>
      <h1>Clients</h1>

      <Button
        variant="outlined"
        children={<RefreshIcon />}
        onClick={resetList}
      />

      <Button variant="outlined" children={<AddIcon />} onClick={toggleAdd} />
      {isOpened && (
        <SignupForm refresh={getData}/>
      )}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {/* <TableCell>id</TableCell> */}
              <TableCell align="center">name</TableCell>
              <TableCell align="center">surname</TableCell>
              <TableCell align="center">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jsonData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell align="right">{row.id}</TableCell> */}
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.surname}</TableCell>
                <TableCell align="left">{row.email}</TableCell>

                <TableCell align="left">
                  <Button
                    variant="outlined"
                    children={<DeleteIcon />}
                    onClick={() => deleteClient(row.id)}
                  ></Button>

                  <Button
                    variant="outlined"
                    children={<EditIcon />}
                    onClick={() =>
                      setEditRow((editRow) => (editRow === row ? null : row))
                    }
                  />
                </TableCell>

                {editRow === row && (
                  <EditForm newClientEdit={editRow} refresh={getData} />
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
