import React, { useState } from "react";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import DeletePopup from "../Common/DeletePopup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setShowPopup(false);
    console.log("rededered");
    toast.success("Item deleted successfully!");
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-content">
          <p className="card-heading">Admin</p>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adi
          </p>
        </div>
        <div className="card-button-wrapper">
          <div className="card-button-data">
            <MdEdit />
            <RiDeleteBin6Line
              onClick={handleDeleteClick}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="pop-up">
          {showPopup && (
            <DeletePopup
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          )}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 198px;
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.068);
    position: relative;
  }

  .card-heading {
    font-size: 20px;
    font-weight: 700;
    color: #0088ff;
  }

  .card-description {
    color: #666;
  }

  .card-button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .card-button-data {
    display: flex;
    justify-content: space-around;
    width: 60%;
    z-index: 2;
  }

  .pop-up {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
`;

export default Cards;
