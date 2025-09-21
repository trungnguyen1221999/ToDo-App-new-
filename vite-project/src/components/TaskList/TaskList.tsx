import { MdEdit, MdDeleteForever } from "react-icons/md";
import styled from "styled-components";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}
interface PropsType {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  isPopUpOpen: boolean;
  isEditOpen: boolean;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialInput: string;
  setInitialInput: React.Dispatch<React.SetStateAction<string>>;
}

const TaskList = (prop: PropsType) => {
  const {
    todo,
    setTodo,
    setIsPopupOpen,
    setId,
    setIsEditOpen,
    setInitialInput,
  } = prop;

  // Toggle completed + lưu localStorage
  const toggleCompleted = (id: string) => {
    setTodo((prev) => {
      const newTodos = prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const completedTasks = todo.filter((task) => task.completed);
  const incompleteTasks = todo.filter((task) => !task.completed);

  return (
    <div>
      {incompleteTasks.length > 0 && (
        <>
          <h2 style={{ color: "red" }}>Incomplete Tasks</h2>
          <StyledUl>
            {incompleteTasks.map((task: Todo) => (
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
                  <button
                    onClick={() => {
                      setIsEditOpen(true);
                      setId(task.id);
                      setInitialInput(task.task);
                    }}
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => {
                      setIsPopupOpen(true);
                      setId(task.id);
                    }}
                  >
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
            {completedTasks.map((task: Todo) => (
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
                  <button
                    onClick={() => {
                      setIsEditOpen(true);
                      setId(task.id);
                      setInitialInput(task.task);
                    }}
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => {
                      setIsPopupOpen(true);
                      setId(task.id);
                    }}
                  >
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
