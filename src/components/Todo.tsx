import { Todo } from "./TodoList";

type Props = {
  todo: Todo;
  checked: (id: number) => void;
  remove: (id: number) => void;
  handleTodo: (todo: Todo) => void;
};

export default function todo({ todo, checked, remove, handleTodo }: Props) {
  return (
    <li className="flex justify-between mb-2 last:mb-0">
      <div>
        <input
          className="mr-2"
          type="checkbox"
          onChange={() => checked(todo.id)}
        />
        <span
          className={todo.completed ? "line-through" : ""}
          onClick={() => handleTodo(todo)}
        >
          {todo.text}
        </span>
      </div>
      <button className="ml-auto" onClick={() => remove(todo.id)}>
        ✖️
      </button>
    </li>
  );
}
