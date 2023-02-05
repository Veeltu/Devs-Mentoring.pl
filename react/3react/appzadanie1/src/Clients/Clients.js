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
import axios from "axios";

// ZADANIE :
// 1. Clients, która:
//OK     Wyświetli na stronie wszystkich klientów,
//OK     Umożliwi usuwanie klienta,
//     Umożliwi edycję klienta,
//     Formularz do dodawania klienta,

export default function Clients() {
  const api = axios.create({
    baseURL: "http://localhost:3000/clients",
  });

  // Get data
  const [jsonData, setJsonData] = useState([]);

  // console.log(jsonData)

  useEffect(() => {
    const getData = () => {
      api.get("/").then((res) => {
        // console.log(res.data);
        setJsonData(res.data);
      });
    };
    getData();
  }, []);

  const newData = {
    id: "12",
    name: "Adamadwa",
    surname: "dwasdw",
    email: "mymaawWW@gmail.com",
  };

  //todo: why error 500 ?
  // const createCourse = async () => {
  //   let res = await api.post(
  //     "/",
  //     newData
  //     )
  //   console.log(res);
  // }

  const createCourse = async () => {
    let res = await api
      .post("/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        newData,
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };
  createCourse();

  // try {
  //   let result = await axios.post(          // any call like get
  //     "http://localhost:3001/user",         // your URL
  //     {                                     // data if post, put
  //       some: "data",
  //     }
  //   );
  //   console.log(result.response.data);
  // } catch (error) {
  //   console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
  // }

  //how to delete ?
  // const deleteClient = async () => {
  //   let res = await api.delete("/", newData)
  //   console.log(res)
  // }
  const deleteRow = async (id, e) => {
    await axios.delete("http://localhost:3000/clients/${id}").then((res) => {
      console.log(res);
      console.log(res.data);

      const posts = jsonData.filter((item) => item.id !== id);
      setJsonData(posts);
    });
  };

  // pull data from Form.js
  const pull_data = (data) => {
    // console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };

  return (
    <div>
      <h1>Clients</h1>

      {/* <Button
        variant="outlined"
        children={<RefreshIcon />}
        onClick={resetList}
      /> */}
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
            {jsonData.map((row, id) => (
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
                    // onClick={() => removeElement(row.id)}
                    onClick={(e) => deleteRow(jsonData.id, e)}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Form func={pull_data} />
    </div>
  );
}
