import { Todo } from "../../types";
import styles from "./Item.module.scss";
import useHandleTodos from "../../hooks/useHandleTodos";

interface ItemProps {
  data: Todo;
}

const Item = ({ data }: ItemProps) => {
  const { id, text } = data;
  const { handleDeleteTodo } = useHandleTodos();

  return (
    <li className={styles.item}>
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

export default Item;
