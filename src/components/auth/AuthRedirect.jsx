// AuthRedirect.jsx
import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import Redirect  from 'react-router-dom'; // Import Redirect from react-router-dom

const AuthRedirect = ({ children }) => {
  const { signedIn } = useClerk();

  if (!signedIn) {
    return <Redirect to="/auth" />; // Use Redirect here
  }

  return <>{children}</>;
};

export default AuthRedirect;
