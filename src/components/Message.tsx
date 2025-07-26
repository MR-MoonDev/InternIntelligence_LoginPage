// src/components/Message.tsx
interface MessageProps {
  type: 'error' | 'success';
  children: string;
}

export default function Message({ type, children }: MessageProps) {
  const color = type === 'error' ? 'text-red-500' : 'text-green-600';
  return <p className={`${color} text-sm mb-2`}>{children}</p>;
}
