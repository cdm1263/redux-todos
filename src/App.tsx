import { useDispatch, useSelector } from "react-redux";
import List from "./components/List/List";
import { FormEvent, useState } from "react";
import { addTodo } from "./store/todoSlice";
import store from "./store/store";

type State = ReturnType<typeof store.getState>;

const App = () => {
  const todos = useSelector((state: State) => state.todoList.todos);
  const [todoText, setTodoText] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: todoText,
      };
      dispatch(addTodo(newTodo));
      setTodoText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button>add</button>
      </form>
      <div>
        {todos.length
          ? todos.map((todo) => <List key={todo.id} data={todo} />)
          : null}
      </div>
    </div>
  );
};

export default App;
