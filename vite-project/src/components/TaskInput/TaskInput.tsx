import { IoMdAdd } from "react-icons/io";
import styled from "styled-components";

const TaskInput = () => {
  return (
    <div>
      <h1>To Do List - TypeScript</h1>
      <StyledForm action="">
        <input type="text" placeholder="Add a new task..." />
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
