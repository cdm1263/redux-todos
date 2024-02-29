import { useSelector } from "react-redux";
import Item from "../Item/Item";
import store from "../../store/store";
import styles from "./List.module.scss";

type State = ReturnType<typeof store.getState>;

const List = () => {
  const todos = useSelector((state: State) => state.todoList.todos);
  return (
    <ul className={styles.wrapper}>
      {todos.length
        ? todos.map((todo) => <Item key={todo.id} data={todo} />)
        : null}
    </ul>
  );
};

export default List;
