import { Todo } from "../../types";
import styles from "./List.module.scss";
import useHandleTodos from "../../hooks/useHandleTodos";

interface ListProp {
  data: Todo;
}

const List = ({ data }: ListProp) => {
  const { id, text } = data;
  const { handleDeleteTodo } = useHandleTodos();

  return (
    <li className={styles.list}>
      <span>{text}</span>
      <button
        onClick={() => {
          handleDeleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default List;
