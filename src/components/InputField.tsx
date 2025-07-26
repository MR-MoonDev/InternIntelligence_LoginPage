type Props = {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
};

export default function InputField({ label, type, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
    </div>
  );
}
