import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const {user, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
    setUserData();
  }, [loginWithRedirect]);

  const setUserData = () => {
    isAuthenticated && localStorage.setItem("authenticated", user);
  }

  return <div>Redirecting...</div>;
};

export default Login;
