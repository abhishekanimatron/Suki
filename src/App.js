import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
