import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthWrapper;