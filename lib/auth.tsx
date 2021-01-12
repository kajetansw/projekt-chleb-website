import React, { useState, useEffect, useContext, createContext } from 'react';

import { createUser } from './db';
import firebase from './firebase';

interface Auth {
  user: firebase.User | null;
  signinWithFacebook: () => Promise<firebase.User | null>;
  signout: () => Promise<void>;
}

const AuthContext = createContext<Auth>(null!);

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth(): Auth {
  const [user, setUser] = useState<firebase.User | null>(null);

  const signinWithFacebook = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((response) => {
        setUser(response.user);
        response.user && createUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithFacebook,
    signout,
  };
}