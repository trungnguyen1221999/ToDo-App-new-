import React, { useEffect, useState } from "react";
import { Overlay, StyledPopup } from "./Poup";
interface Todo {
  id: string;
  task: string;
  completed: boolean;
}
interface EditPopupProps {
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  isEditOpen: boolean;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialInput: string;
  setInitialInput: React.Dispatch<React.SetStateAction<string>>;
}
const EditPoup = (prop: EditPopupProps) => {
  const { setTodo, id, isEditOpen, setIsEditOpen, initialInput } = prop;
  const [input, setInput] = useState(initialInput);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    setInput(initialInput);
  }, [initialInput]);

  return (
    <>
      {isEditOpen && (
        <Overlay
          onClick={() => {
            setIsEditOpen(false);
          }}
        >
          <StyledPopup onClick={(e) => e.stopPropagation()}>
            <h2>Edit Task</h2>
            <input type="text" value={input} onChange={(e) => handleInput(e)} />
            <div className="button">
              <button
                onClick={() => {
                  setTodo((prev) => {
                    const newTodo = prev.map((task) =>
                      task.id === id ? { ...task, task: input } : task
                    );

                    localStorage.setItem("todos", JSON.stringify(newTodo));
                    return newTodo;
                  });

                  setIsEditOpen(false);
                }}
                style={{ backgroundColor: "green", color: "white" }}
              >
                Save
              </button>
              <button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => setIsEditOpen(false)}
              >
                Cancel
              </button>
            </div>
          </StyledPopup>
        </Overlay>
      )}
    </>
  );
};

export default EditPoup;
