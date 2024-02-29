import styles from "./TodoForm.module.scss";
import useText from "../../hooks/useText";
import useHandleTodos from "../../hooks/useHandleTodos";
import { useRef } from "react";

const TodoForm = () => {
  const { todoText, handleChange } = useText();
  const { handleAddTodo } = useHandleTodos();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => handleAddTodo(e, todoText, ref)}
      className={styles.form}
    >
      <input
        ref={ref}
        type="text"
        value={todoText}
        placeholder="할 일을 적어주세요."
        onChange={(e) => handleChange(e)}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
