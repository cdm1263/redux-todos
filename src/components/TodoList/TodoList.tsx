import Form from "../Form/Form";
import List from "../List/List";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
      <List />
    </div>
  );
};

export default TodoList;
