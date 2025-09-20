import styled from "styled-components";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import { useState } from "react";
import type { Todo } from "../../@types/todo.type";

const TodoList = () => {
  return (
    <Todo>
      <Container>
        <TaskInput />
        <TaskList />
      </Container>
    </Todo>
  );
};

export default TodoList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
