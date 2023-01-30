import { Link, Route, Routes } from "react-router-dom";
import Orders from "./Orders/Orders";
import Clients from "./Clients/Clients";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="contained">
            <Link to="/orders" style={{ color: "white" }}>
              orders
            </Link>
          </Button>
          <Button variant="contained">
            <Link to="/clients" style={{ color: "white" }}>
              clients
            </Link>
          </Button>
        </Stack>
      </div>

      <div>
        <Routes>
          {/* <Route index element={...home site...}/> */}
          <Route path="/" element={""} />
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
