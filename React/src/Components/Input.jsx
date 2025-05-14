import React from "react";
import styled from "styled-components";

const Input = ({ type = "text", value, onChange, placeholder }) => {
  return (
    <StyledWrapper>
      <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>

        <input
          id="query"
          className="input"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Search..."}
          name="searchbar"
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 300px;
  }

  .input {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    height: 45px;
    padding-left: 2.5rem;
    box-shadow: 0 0 0 1.5pxrgb (221, 223, 245), 0 0 25px -17px #000;
    border: 0;
    border-radius: 12px;
    background-color: rgb(255, 255, 255);
    outline: none;
    color: rgb(9, 10, 19);
    transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
    cursor: text;
    z-index: 0;
  }

  .input::placeholder {
    color: #bdbecb;
  }

  .input:hover {
    box-shadow: 0 0 0 2.5pxrgb (231, 232, 239), 0px 0px 25px -15px #000;
  }

  .input:active {
    transform: scale(0.95);
  }

  .input:focus {
    box-shadow: 0 0 0 2.5pxrgb (234, 235, 241);
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    fill: #bdbecb;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    z-index: 1;
  }
`;

export default Input;
