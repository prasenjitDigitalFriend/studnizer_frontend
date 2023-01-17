import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import './css/main.css';
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={withRouter(Login)} />
        <Route exact path="/dashboard" component={withRouter(Dashboard)} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
