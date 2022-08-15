import styled from "styled-components";
import { useRecoilState } from "recoil";
import { categoryState, categories } from "../atoms";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  display: flex;
`

const Select = styled.select`
  margin-bottom: 20px;
  padding: 5px;
`;
const CategoryInput = styled.input`
  border: none;
  margin-left: 10px;
  padding: 5px;
`;

interface ICategoryForm {
  newCategory: string;
}

const CategorySelector = () => {
  const [categoryList, setCategoryList] = useRecoilState(categories);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) =>
    setCategory(e.currentTarget.value as any);

  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const onvalid = (data:ICategoryForm) => {
    setCategoryList(prev => [...prev, data.newCategory]);
    setValue("newCategory", "");
    setCategory(data.newCategory);
  }
  return (
    <Wrapper>
      <Select id="category" value={category} onInput={onInput}>
        {categoryList.map((c, idx) => (
          <option key={idx} value={c}>
            {c}
          </option>
        ))}
      </Select>
      <form onSubmit={handleSubmit(onvalid)}>
        <CategoryInput
          {...register("newCategory")}
          type="text"
          placeholder="Create a new Category"
        />
      </form>
    </Wrapper>
  );
};

export default CategorySelector;
