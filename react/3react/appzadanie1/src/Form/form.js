import { Box, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";
const url = "http://localhost:3000/clients";

const SignupForm = ({ refresh }) => {
  //form
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      surname: "",
      email: "",
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
      const handle = async (e) => {
        try {
          const resp = await axios.post(url, values, null, 2);
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
    <Box m="20px">
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
      </form>
    </Box>
  );
};

export default SignupForm;
