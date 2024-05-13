type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button
      className="bg-black text-white p-2 rounded-md w-24 text-xs sm:text-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
