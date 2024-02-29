import TodoForm from "../Form/TodoForm";
import TodosArea from "../List/TodosArea";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  return (
    <div className={styles.wrapper}>
      <TodoForm />
      <TodosArea />
    </div>
  );
};

export default TodoList;
