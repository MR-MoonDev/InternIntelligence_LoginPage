type Props = {
  text: string;
  type?: 'submit' | 'button';
};

export default function Button({ text, type = 'button' }: Props) {
  return (
    <button
      type={type}
      className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
    >
      {text}
    </button>
  );
}
