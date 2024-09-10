import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./screens/Login";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from "./screens/Signup.js";

function App() {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
