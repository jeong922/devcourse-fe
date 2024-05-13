import { Todo } from "./TodoList";

type Props = {
  close: (e: React.MouseEvent) => void;
  todo: Todo | null;
};

export default function TodoModal({ todo, close }: Props) {
  return (
    <div
      onClick={close}
      className="fixed left-0 top-0 w-full h-full bg-black/70 flex justify-center items-center"
    >
      <div className="bg-white w-96 h-64 p-4">
        <div className="flex justify-between border-b-2 pb-2 mb-4">
          <span>Todo </span>
          <button onClick={close}>❌</button>
        </div>
        <span>{todo?.text}</span>
      </div>
    </div>
  );
}
