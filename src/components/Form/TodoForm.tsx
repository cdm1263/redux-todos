import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import styles from "./TodoForm.module.scss";

const TodoForm = () => {
  const [todoText, setTodoText] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddTodo = (e: FormEvent) => {
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
  return (
    <form onSubmit={handleAddTodo} className={styles.form}>
      <input
        type="text"
        value={todoText}
        placeholder="할 일을 적어주세요."
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
