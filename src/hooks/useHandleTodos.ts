import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../store/todoSlice";
import { FormEvent } from "react";

const useHandleTodos = () => {
  const dispatch = useDispatch();

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleAddTodo = (
    e: FormEvent,
    todoText: string,
    setTodoText: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: todoText,
      };
      dispatch(addTodo(newTodo));
      setTodoText("");
    }
  };

  return { handleDeleteTodo, handleAddTodo };
};

export default useHandleTodos;
