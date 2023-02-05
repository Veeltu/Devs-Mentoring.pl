
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