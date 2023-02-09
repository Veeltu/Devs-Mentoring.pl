
  // axios.defaults.baseURL = 'http://localhost:3000';
  const api = axios.create({
    baseURL: "http://localhost:3000/clients"
  })

  // Get data
  const [data, setData] = useState([]);
  
  const getData = () => {
    api.get('/').then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }

  useEffect(() =>  {
    getData()
  },[])


  // const getData = () => {
  //   // POST(dodaj nowe), PUT(modyfikuj), DELETE(usun), GET => AXIOS
  //   fetch("http://localhost:3000/clients", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       // console.log(response);
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       // console.log(myJson);
  //       setData(myJson);
  //       setClients(myJson);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

// axios.post('/clients', {
//   "id": 11,
//   "name": "Adamadwa",
//   "surname": "dwasdw",
//   "email": "mymaawWW@gmail.com"
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

// const createCourse =  async () => {
//   let res = await  api.post('/', {
//       "id": 11,
//   "name": "Adamadwa",
//   "surname": "dwasdw",
//   "email": "mymaawWW@gmail.com"
//   })
//   console.log(res)
// }
// createCourse()


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
    // console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }

  const resetClients = [
    {
      id: '',
      name: "Adam",
      surname: "Jochemczyk",
      email: "mymail@gmail.com",
    },
    {
      id: 2,
      name: "Jan",
      surname: "emczyk",
      email: "mymail@gmail.com",
    },
    {
      id: 3,
      name: "Karolina",
      surname: "Ademczyk",
      email: "ail@gmail.com",
    }
  ]


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        id: "",
        name: "Jan",
        surname: "Dywan",
        email: "janDywan@dywany.io"
      })
    } catch (error) {
      console.log(error.resp)

    }
  }

  onSubmit:values=>
          {
            const AddCompany=async e()=> {
              e.preventDefault();
              axios.post(`${config.APP_CONFIG}/Companies/Company`,values)
              .then(res => {
               if(res.data.status_code === 200){
                //setUser(res.data.msg)
                history.push("/settings/companies");
               }
               
             })
             .catch(err => {
              toast.error("Couldnot lpost data")
            }) 
             }
        },

        // /////////////////////////////////////////////////////////////

        import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';

import {
  generateRows,
  defaultColumnValues,
} from '../../../demo-data/generator';

const getRowId = row => row.id;

export default () => {
  const [columns] = useState([
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ]);
  const [rows, setRows] = useState(generateRows({
    columnValues: { id: ({ index }) => index, ...defaultColumnValues },
    length: 8,
  }));

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter(row => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (
    <Paper>
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <EditingState
          onCommitChanges={commitChanges}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
      </Grid>
    </Paper>
  );
};
