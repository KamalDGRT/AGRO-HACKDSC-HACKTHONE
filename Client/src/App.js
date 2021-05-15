import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ViewProduct from './Components/ViewProduct'
import Header from './Components/Header'
import Admin from "./Components/Admin/Admin";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <h1>Hello Cart</h1>
          </Route>

          <Route path="/viewproduct">
            <Header/>
            <ViewProduct/>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path = "/admin">
            <Admin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
