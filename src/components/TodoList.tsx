import styled from "styled-components";
import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { todoSelector } from "../atoms";
import Todo from "./Todo";
import CategorySelector from "./CategorySelector";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
    background-color: #e5dbff;
    padding: 20px 25px;
    border-radius: 10px;
`;

const TodosWrapper = styled.ul`
  margin-top: 40px;
  min-height: 60%;
`;

const ToDoList = () => {
  const todos = useRecoilValue(todoSelector);
  return (
    <Wrapper>
      <FormWrapper>
        <CategorySelector />
        <CreateTodo />
      </FormWrapper>

      <TodosWrapper>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} /> //todo 타입과 props 인터페이스가 같기 때문에 걍 바로 spread
        ))}
      </TodosWrapper>
    </Wrapper>
  );
};

export default ToDoList;
