import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login onSignUpClick={() => setIsLogin(false)} />
      ) : (
        <SignUp onLoginClick={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default AuthPage;
