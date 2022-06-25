import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Front from "./Front/Front";
import Admin from "./Admin/Admin";
import User from "./User/User";
import Login from "./Front/Login";
import Register from "./Front/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <div className="">
      <Router>
        <Route path="/" component={Front} exact />
        <Route path="/home" component={Front} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
} 

export default App;
