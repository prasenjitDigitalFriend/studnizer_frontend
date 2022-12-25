import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './css/main.css';
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
