import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/account/Login"));
const Register = lazy(() => import("./pages/account/CreateAccount"));
const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import("./pages/Home"));
const Responsibility = lazy(() => import("./pages/Responsibility"));
const AllProducts = lazy(() => import("./pages/collections/AllProducts"));
const Blackmoon = lazy(() => import("./pages/collections/Blackmoon"));
const SukiSpace = lazy(() => import("./pages/collections/SukiSpace"));
const NotFound = lazy(() => import("./pages/notFound"));
const AnimalCrossing = lazy(() => import("./pages/AnimalCrossing"));

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.REGISTER} component={Register} />
          <Route path={ROUTES.RESPONSIBILITY} component={Responsibility} />
          <Route path={ROUTES.ALL_PRODUCTS} component={AllProducts} />
          <Route path={ROUTES.BLACK_MOON} component={Blackmoon} />
          <Route path={ROUTES.SPACE} component={SukiSpace} />
          <Route path={ROUTES.ANIMAL_CROSSING} component={AnimalCrossing} />
          <Route path={ROUTES.CART} component={Cart} />
          <Route path={ROUTES.HOME} component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
