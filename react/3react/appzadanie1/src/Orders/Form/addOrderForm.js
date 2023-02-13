import { Box, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Unstable_Grid2";

// import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CloseIcon from "@mui/icons-material/Close";
import { Icon } from "@mui/material";

import axios from "axios";
const url = "http://localhost:3000/order";

const AddNewOrder = ({ refresh, toggle }) => {
  //form
  const formik = useFormik({
    initialValues: {
      id: "",
      order: "",
      isReady: false,
    },

    //validation
    validationSchema: Yup.object({
      order: Yup.string()
        .max(30, "Must be 30 characters or less")
        .min(7, "Must br 7 characters or more")
        .required("Required"),
    }),

    //submit
    onSubmit: (values) => {
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
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box
        component={Card}
        sx={{
          margin: "20px",
          padding: "20px",
          position: "absolute",
          minWidth: 350,
          zIndex: "99",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box display="grid" gap="10px">
            <label htmlFor="order">AddNewOrder</label>

            <input
              id="order"
              name="order"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.order}
            />

            {formik.touched.order && formik.errors.order ? (
              <div>{formik.errors.order}</div>
            ) : null}

            <label htmlFor="isReady">isReady</label>
          </Box>

          <Button variant="contained" type="submit">
            Submit
          </Button>

          <Icon
            children={<CloseIcon />}
            onClick={toggle}
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
          ></Icon>

        </form>
      </Box>
    </Grid>
  );
};

export default AddNewOrder;
