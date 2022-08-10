import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase';
//import { auth, provider } from '../firebase';

const loginInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {

  });
};

const Login = () => {
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
      
    </div>
  )
}

export default Login