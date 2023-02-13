import { Box, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";

import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@mui/material';

import axios from "axios";
const url = "http://localhost:3000/clients/";

const EditForm = ({ newClientEdit, refresh, toggle }) => {
  const formik = useFormik({
    initialValues: {
      id: newClientEdit.id,
      name: newClientEdit.name,
      surname: newClientEdit.surname,
      email: newClientEdit.email,
    },

    //validation
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      surname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    //submit
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      console.log(values);
      const handle = async (values) => {
        try {
          const resp = await axios.put(url + values.id, values); // change for put
          refresh();
          console.log(resp);
          console.log(resp.data);
        } catch (error) {
          console.log(error.resp);
        }
      };
      handle(values);
    },
  });

  return (
    <Grid
      container
      sx={{
        width:"100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        // transform: 'translateY(-50%)',
        // transform: "translateY(0)",
        transform: 'translateX(-50%)',
        zIndex: "99"
      }}
      >
      <Box
        component={Card}
        sx={{
          margin: "20px",
          padding: "20px",
          position: "absolute",
          minWidth: 350,
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box display="grid" gap="10px">
            <label htmlFor="name">First Name</label>

            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="surname">Last Name</label>
            <input
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />

            {formik.touched.surname && formik.errors.surname ? (
              <div>{formik.errors.surname}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </Box>

          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Icon
                    fontSizeSmall
                    children={<CloseIcon />}
                    onClick={toggle}
                    sx={{position: "absolute", top:"20px", right:"20px",cursor: "pointer"}}
                  ></Icon>
        </form>
      </Box>
    </Grid>
  );
};

export default EditForm;
