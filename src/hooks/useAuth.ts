import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const useAuth = () => {
  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const resetPassword = (email: string) =>
    sendPasswordResetEmail(auth, email);

  const logout = () => signOut(auth);

  return { login, signup, resetPassword, logout };
};
