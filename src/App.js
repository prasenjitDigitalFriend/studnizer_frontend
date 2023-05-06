import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import './css/main.css';
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Profile from "./views/profile/Profile";
import Register from "./views/Register";
import Routine from "./views/routine/Routine";
import Subject from "./views/subject/Subject";
import Todo from "./views/todo/Todo";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={withRouter(Login)} />
        <Route exact path="/dashboard" component={withRouter(Dashboard)} />
        <Route exact path="/register" component={withRouter(Register)}/>
        <Route exact path={'/todo'} component={withRouter(Todo)}/>
        <Route exact path={'/routine'} component={withRouter(Routine)}/>
        <Route exact path={'/subject'} component={withRouter(Subject)}/>
        <Route exact path={'/profile'} component={withRouter(Profile)}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
