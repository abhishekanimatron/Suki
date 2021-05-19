import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Responsibility from "./pages/Responsibility";
import AllProducts from "./pages/collections/AllProducts";
import Blackmoon from "./pages/collections/Blackmoon";
import SukiSpace from "./pages/collections/SukiSpace";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/account" component={Account} />
        <Route exact path="/pages/responsibility" component={Responsibility} />
        <Route exact path="/collections/all-products" component={AllProducts} />
        <Route exact path="/collections/black-moon" component={Blackmoon} />
        <Route exact path="/collections/space-2029" component={SukiSpace} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
