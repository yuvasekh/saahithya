import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // Import jwtDecode or your JWT decoding library

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('token');
  const location = useLocation();
  let role;

  try {
    const decoded = jwtDecode(user);
    console.log(decoded);
    role = decoded.role;

    const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds

    if (decoded.exp < currentTimestamp) {
      console.log('Token expired');
      return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        console.log(children,"child")
      // Pass the role as a prop to the children components
      return React.Children.map(children, (child) =>
        React.cloneElement(child, { role })
      );
    }
  } catch (error) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
