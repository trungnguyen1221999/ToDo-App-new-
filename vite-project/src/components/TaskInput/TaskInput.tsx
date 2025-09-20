import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import styled from "styled-components";

interface PropsType {
  handleAdd: (task: string) => void;
}

const TaskInput = (props: PropsType) => {
  const { handleAdd } = props;
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleAdd(input);
    setInput("");
  };

  return (
    <div>
      <h1>To Do List - TypeScript</h1>
      <StyledForm action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <IoMdAdd />
        </button>
      </StyledForm>
    </div>
  );
};

export default TaskInput;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: space-between;
  width: 100%;
  input {
    flex: 1;
    padding: 8px;
  }
  button {
    padding: 5px;
    cursor: pointer;
    svg {
      font-size: 1rem;
    }
  }
`;
