import LoginComp from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  const { isAuth } = useContext(AuthContextProvider);

  return (
    <Router>
      <Route exact path="/register" children={<Register />} />
      <Route exact path="/" children={isAuth ? <Dashboard /> : <LoginComp />} />
      <Route exact path="/login" children={<LoginComp />} />
    </Router>
  );
}

export default App;
