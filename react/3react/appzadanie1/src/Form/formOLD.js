import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
const url = "http://localhost:3000/clients";

const Form = ({refresh}) => {
  // const [newClient, setNewClient] = useState([]); //dont work

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState({name: "", surname: "", email: ""})

  //todo : przy pierwszym kliknieciu zwraca pusta tablice, pozniej dziala z opoznieniem -1 ???
console.log(newUser)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, newUser); 
      refresh()
      // console.log(resp)
      // console.log(resp.data)
    } catch (error) {
      // console.log(error.resp)
    }
  };

  // props.func(newClient);

  return (
    <Box m="20px">
      <h1>header</h1>

      <Formik
        onSubmit={handleSubmit}
        // onSubmit={submit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="30px">
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="name"
                onBlur={handleBlur}
                onChange={(e) => setNewUser({...newUser, name: e.target.value})} //or values ?
                value={newUser.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="surname"
                onBlur={handleBlur}
                onChange={(e) => setNewUser({...newUser, surname: e.target.value})}
                value={newUser.surname}
                name="surname"
                error={!!touched.surname && !!errors.surname}
                helperText={touched.surname && errors.surname}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                value={newUser.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  surname: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
});

const initialValues = {
  id: "",
  name: "",
  surname: "",
  email: "",
};

export default Form;
