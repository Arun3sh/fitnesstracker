import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
