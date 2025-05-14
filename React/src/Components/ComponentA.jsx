import React, { createContext, useContext, useState } from "react";
import ComponentB from "./ComponentB";

export const nameContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("kiranjith");
  return (
    <div className="border border-dark m-2">
      component A name={user}
      <nameContext.Provider value={user}>
        <ComponentB />
      </nameContext.Provider>
    </div>
  );
};

export default ComponentA;
