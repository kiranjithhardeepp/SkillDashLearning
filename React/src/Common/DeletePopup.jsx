import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const DeletePopup = ({ onConfirm, onCancel }) => {
  return (
    <PopupBox>
      <p className="popup-text">Are you sure you want to delete this team?</p>
      <div className="popup-buttons">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </PopupBox>
  );
};

const PopupBox = styled.div`
  width: 221px;
  height: 118px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${fadeInScale} 0.3s ease-out;
  z-index: 11; /* Ensure popup is above other elements */

  .popup-text {
    font-size: 12px;
    color: #000;
    margin-bottom: 10px;
    text-align: center;
  }

  .popup-buttons {
    display: flex;
    justify-content: space-between;

    button {
      width: 65px;
      height: 25px;
      font-size: 12px;
      border: 1px solid rgba(34, 34, 34, 0.15);
      background: transparent;
      border-radius: 9px;
      cursor: pointer;
    }
  }
`;

export default DeletePopup;