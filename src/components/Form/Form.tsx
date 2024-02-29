import styles from "./Form.module.scss";
import useText from "../../hooks/useText";
import useHandleTodos from "../../hooks/useHandleTodos";

const Form = () => {
  const { todoText, setTodoText, handleChange } = useText();
  const { handleAddTodo } = useHandleTodos();

  return (
    <form
      onSubmit={(e) => handleAddTodo(e, todoText, setTodoText)}
      className={styles.form}
    >
      <input
        type="text"
        value={todoText}
        placeholder="할 일을 적어주세요."
        onChange={(e) => handleChange(e)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
