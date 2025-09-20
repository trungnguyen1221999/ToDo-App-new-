import React, { useState } from "react";
import styled from "styled-components";
import type { PopupRemove } from "../../@types/todo.type";

const Poup = (prop: PopupRemove) => {
  const { open, setOpen, setTodo, id, setId } = prop;
  const handleRemove = () => {
    setTodo((prev) => prev.filter((task) => task.id !== id));
    setOpen(false);
  };
  return (
    <>
      {open && (
        <Overlay
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
        >
          <StyledPopup>
            <h2>Are you sure to remove this task?</h2>
            <div className="button">
              <button
                onClick={handleRemove}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Yes
              </button>
              <button
                style={{ backgroundColor: "green", color: "white" }}
                onClick={() => setOpen(false)}
              >
                No
              </button>
            </div>
          </StyledPopup>
        </Overlay>
      )}
    </>
  );
};

export default Poup;

export const Overlay = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #41404074;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const StyledPopup = styled.div`
  display: flex;
  z-index: 3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 20px;
  border-radius: 10px;
  background-color: #fff;
  .button {
    display: flex;
    gap: 20px;
    button {
      padding: 10px 20px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        opacity: 0.8;
        transform: translateY(-5px);
      }
    }
  }
`;
