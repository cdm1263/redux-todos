import { useSelector } from "react-redux";
import List from "./List";
import store from "../../store/store";
import styles from "./TodosArea.module.scss";

type State = ReturnType<typeof store.getState>;

const TodosArea = () => {
  const todos = useSelector((state: State) => state.todoList.todos);
  return (
    <ul className={styles.wrapper}>
      {todos.length
        ? todos.map((todo) => <List key={todo.id} data={todo} />)
        : null}
    </ul>
  );
};

export default TodosArea;
