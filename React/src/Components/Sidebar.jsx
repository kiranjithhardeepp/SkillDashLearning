// Components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div>
        <h2>Skilldash</h2>
      </div>
      <ul>
        <li>
          <Link className="links" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="links" to="/user">
            User
          </Link>
        </li>
        <li>
          <Link className="links" to="/team">
            Team
          </Link>
        </li>
        <li>
          <Link className="links" to="/user-group">
            User Group
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
