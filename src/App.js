
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Registration from './components/Authentication/Registration/Registration';
import LogIn from './components/Authentication/LogIn/LogIn';
import AllProducts from './components/Products/AllProducts/AllProducts';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './components/Authentication/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/purchase/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
