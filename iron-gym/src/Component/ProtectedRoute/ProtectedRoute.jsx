import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token'); // تأكد إذا كان المستخدم مسجل الدخول

  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
}

