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
function App() {
  return (
    <div >
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
