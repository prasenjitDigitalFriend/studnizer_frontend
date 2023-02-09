import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import './css/main.css';
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={withRouter(Login)} />
        <Route exact path="/dashboard" component={withRouter(Dashboard)} />
        <Route exact path="/register" component={withRouter(Register)}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
