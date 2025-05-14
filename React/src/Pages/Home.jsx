import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import AddUserForm from "../Components/AddUserForm";

const MyButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const Home = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row d-flex justify-content-center">
        <AddUserForm />
      </div>
    </div>
  );
};

export default Home;
