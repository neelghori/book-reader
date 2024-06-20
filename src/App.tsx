import "./App.css";
import LoginComp from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" children={<Dashboard />} />
        <Route exact path="/login" children={<LoginComp />} />
        <Route exact path="/register" children={<Register />} />
      </Router>
    </>
  );
}

export default App;
