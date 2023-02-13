import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useState } from "react";
const url = "http://localhost:3000/order/";


export default function ControlledCheckbox({ refresh, row }) {

  const [values, setValues ] = useState({
                                              id: row.id,
                                              order: row.order,
                                              isReady: row.isReady,
                                          })
  
  const handleChange = (event) => {
      setValues({...values, isReady: event.target.checked});
      const handlePut = async () => {
        try {
          const resp = await axios.put(url + row.id, {...values, isReady:event.target.checked});
          console.log(resp)
          console.log(resp.data)
          refresh();
        } catch (error) {}
        
    };
    handlePut();
  };

  return (
    <Checkbox
      checked={values.isReady}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
