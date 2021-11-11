import Footer from './components/shared/Footer/Footer';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavigationBar from './components/shared/NavigationBar/NavigationBar';
import Registration from './components/Authentication/Registration/Registration';
import LogIn from './components/Authentication/LogIn/LogIn';
import AllProducts from './components/Products/AllProducts/AllProducts';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './components/Authentication/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <NavigationBar></NavigationBar>
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
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
