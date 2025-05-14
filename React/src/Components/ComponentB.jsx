import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ user }) => {
  return (
    <div className="border border-dark m-2">
      {user}
      component b = {user}
      <ComponentC user={user} />
    </div>
  );
};

export default ComponentB;
