import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todoState, categoryState } from "../atoms";
import styled from 'styled-components';

const TodoInput = styled.input`
    width: 200px;
    padding: 10px;
    border: none;
    margin-right: 5px;
`

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, formState: {errors} , setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: data.todo, category },
    ]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <TodoInput
        {...register("todo", { required: "Please write your To Do" })}
        placeholder={`Write a to do for ${category}`}
      />
      <button>Add</button>
      <div style={{marginTop: '7px', fontSize: '14px'}}>{errors?.todo?.message}</div>
    </form>
  );
};

export default CreateTodo;
