import { useDispatch } from "react-redux";
import { Todo } from "../../types";
import { deleteTodo } from "../../store/todoSlice";
import styles from "./List.module.scss";

interface ListProp {
  data: Todo;
}

const List = ({ data }: ListProp) => {
  const dispatch = useDispatch();
  const { id, text } = data;

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

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
