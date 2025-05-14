import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Team from "./Pages/Team";
import UserGroup from "./Pages/UserGroup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/team" element={<Team />} />
              <Route path="/user-group" element={<UserGroup />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
