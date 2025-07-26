// src/components/AuthCard.tsx
import { type ReactNode } from 'react';

interface AuthCardProps {
  title: string;
  children: ReactNode;
}

export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-theme">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm animate-fadeIn">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
}
