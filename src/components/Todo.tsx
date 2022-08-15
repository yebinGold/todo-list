import React from "react";
import styled from "styled-components";
import { categories, ITodo, todoState } from "./../atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";

const EachTodo = styled.li`
  background-color: #f3f0ff;
  min-width: 320px;
  padding: 10px 15px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    margin-right: 10px;
  }
`;
const BtnWrapper = styled.div`
    min-width: 200px;
`;

const DeleteBtn = styled.button`
  background-color: rgba(255, 99, 72, 0.8);
  &:hover {
    background-color: tomato;
    color: aliceblue;
  }
`;

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  const categoryList = useRecoilValue(categories);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { text, id, category: name as any };
        }
        return todo;
      });
    });
  };
  const onRemove = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <EachTodo>
      <strong>{text}</strong>
      <BtnWrapper>
        {categoryList
          .filter((c) => c !== category)
          .map((elem) => (
            <button key={elem} name={elem} onClick={onClick}>
              {elem}
            </button>
          ))}
        <DeleteBtn onClick={onRemove}>Delete</DeleteBtn>
      </BtnWrapper>
    </EachTodo>
  );
};

export default Todo;
