// src/app/pages/ForgotPassword.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AuthCard from '../components/AuthCard';
import Message from '../components/Message';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
    } catch (err) {
      console.error("Reset error:", err);
      setError('Email not found or invalid.');
    }
  };

  return (
    <AuthCard title="Reset Password">
      <form onSubmit={handleReset}>
      {error && <Message type="error">{error}</Message>}
      {message && <Message type="success">{message}</Message>}

        <InputField label="Email" type="email" value={email} onChange={setEmail} />

        <Button text="Send Reset Email" type="submit" />

        <p className="mt-4 text-center text-sm">
          Remembered your password?{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
