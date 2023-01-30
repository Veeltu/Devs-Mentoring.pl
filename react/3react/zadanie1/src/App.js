import { Switch, Link, Route, BrowserRouter } from "react-router-dom";
import { Orders } from "./Orders/Orders";
import { Clients } from "./Clients/Clients";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/orders">Orders</Link>
        <Link to="/clients">Clients</Link>
      </div>
      <div>
        <Switch>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/clients" component={Clients}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App();
