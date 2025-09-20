import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";

const TaskList = () => {
  return (
    <div>
      <h2>InComplete Tasks</h2>
      <StyledUl>
        <StyledLi>
          <div className="task">
            <label>
              <input type="checkbox" />
              Task 1
            </label>
          </div>
          <span className="button">
            <button>
              <MdEdit />
            </button>
            <button>
              <MdDeleteForever />
            </button>
          </span>
        </StyledLi>
      </StyledUl>
    </div>
  );
};

export default TaskList;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.3s;
    font-size: 1.2rem;
    &:hover {
      font-size: 1.4rem;
    }
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  .button {
    display: flex;
    gap: 10px;
    svg {
      padding: 0.2rem;
      font-size: 0.9rem;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
