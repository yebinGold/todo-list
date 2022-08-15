import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "saveTodo",
  storage: localStorage,
});

const { persistAtom: persistCategory } = recoilPersist({
    key: "saveCategories",
    storage: localStorage,
  });

export interface ITodo {
  id: number;
  text: string;
  category: string;
}

export const todoState = atom<ITodo[]>({
  // TODO들의 배열임을 알려줌
  key: "todo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categories = atom<string[]>({
  key: "categories",
  default: ["TO_DO", "DOING", "DONE"],
  effects_UNSTABLE: [persistCategory],
});


export const categoryState = atom({
  // 현재 카테고리 정보
  key: "category",
  default: "TO_DO",
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    // atom을 받을 get 함수
    // todoSelector가 반환할 값
    const todos = get(todoState); // todoState atom을 받아옴
    const category = get(categoryState);

    return todos.filter((todo) => todo.category === category);
  },
});
