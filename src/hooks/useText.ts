import { ChangeEvent, useState } from "react";

const useText = () => {
  const [todoText, setTodoText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return { todoText, handleChange };
};

export default useText;
