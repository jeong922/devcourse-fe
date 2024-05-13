import { useState } from "react";
import Todo from "./Todo";
import TodoModal from "./TodoModal";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "TS 공부하기", completed: false },
    { id: 2, text: "JS 공부하기", completed: false },
  ]);

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCheckedChange = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      return;
    }
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, todo]);

    setNewTodo("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodo = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowDetail(false);
      setSelectedTodo(null);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center bg-indigo-50/70 rounded-lg p-5 mb-0 sm:mb-4 mr-2 h-full">
      <h1 className="text-center text-4xl mb-5 font-bold">TodoList</h1>
      <form className="flex justify-center mb-5 w-full" onSubmit={addTodo}>
        <input
          className="mr-3 px-2 py-1 w-full rounded-md"
          type="text"
          placeholder="todo"
          onChange={handleChange}
          value={newTodo}
        />
        <button className="bg-white p-1 rounded-full">➕</button>
      </form>
      <div className="bg-white rounded-lg shadow-lg overflow-auto p-5 w-full h-full sm:max-h-[300px] max-h-48">
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              checked={handleCheckedChange}
              remove={removeTodo}
              handleTodo={handleTodo}
            />
          ))}
        </ul>
      </div>
      {showDetail && (
        <TodoModal close={handleCloseDetail} todo={selectedTodo} />
      )}
    </div>
  );
}
