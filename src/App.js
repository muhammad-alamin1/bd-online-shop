
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Login from "./Components/Auth/Login/Login";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/Auth/PublicRoute/PublicRoute";
import Signup from "./Components/Auth/Signup/Signup";
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import OrderDelivery from "./Components/OrderDelivery/OrderDelivery";
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Profile from "./Components/Profile/Profile";
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/inventory">
            <Inventory />
          </PrivateRoute>
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <PrivateRoute path="/user/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/place-order">
            <OrderDelivery />
          </PrivateRoute>
          <PublicRoute path="/signup">
            <Signup />
          </PublicRoute>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
