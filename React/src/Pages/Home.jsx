import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import UserGroupModal from "../Components/UserGroupModal";
import React, { useState } from "react";

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
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container-fluid vh-100">
      <div className="row d-flex justify-content-center">
        <Button onClick={() => setShowModal(true)}>
          Open User Group Modal
        </Button>
        <UserGroupModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};

export default Home;
