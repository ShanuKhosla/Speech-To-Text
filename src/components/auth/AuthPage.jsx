// AuthPage.js
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const AuthPage = () => {
  return (
    <div>
      <SignedOut>
        <h1>Sign In</h1>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <h1>Welcome</h1>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AuthPage;
