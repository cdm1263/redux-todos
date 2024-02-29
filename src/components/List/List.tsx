import { useDispatch } from "react-redux";
import { Todo } from "../../types";
import { deleteTodo } from "../../store/todoSlice";

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
    <div>
      <span>{text}</span>
      <button
        onClick={() => {
          handleDeleteTodo(id);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default List;
