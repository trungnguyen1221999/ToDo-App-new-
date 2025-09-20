import { useState } from "react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import type { Todo } from "../../@types/todo.type";

interface PropsType {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList = (prop: PropsType) => {
  const { todo, setTodo } = prop;
  const toggleCompleted = (id: string) => {
    setTodo((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = todo.filter((task) => task.completed);
  const incompleteTasks = todo.filter((task) => !task.completed);

  return (
    <div>
      {incompleteTasks.length > 0 && (
        <>
          <h2 style={{ color: "red" }}>Incomplete Tasks</h2>
          <StyledUl>
            {incompleteTasks.map((task) => (
              <StyledLi key={task.id}>
                <div className="task">
                  <label>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleCompleted(task.id)}
                    />
                    {task.task}
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
            ))}
          </StyledUl>
        </>
      )}

      {completedTasks.length > 0 && (
        <>
          <h2 style={{ color: "green" }}>Complete Tasks</h2>
          <StyledUl>
            {completedTasks.map((task) => (
              <StyledLi
                key={task.id}
                style={{ textDecoration: "line-through" }}
              >
                <div className="task">
                  <label>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleCompleted(task.id)}
                    />
                    {task.task}
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
            ))}
          </StyledUl>
        </>
      )}
    </div>
  );
};

export default TaskList;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    padding: 0.5rem;
    cursor: pointer;
  }
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
