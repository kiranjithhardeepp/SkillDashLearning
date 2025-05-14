import { nameContext } from "./ComponentA";
import { useContext } from "react";

const ComponentC = () => {
  const user = useContext(nameContext);
  return <div className="border border-dark m-2">component c = {user}</div>;
};

export default ComponentC;
