import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Singup';
import ForgotPassword from './pages/ForgotPassword';

export default function App() {
  return (
   <div className='bg-indigo-400'>
     <Routes >
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
   </div>
  );
}
