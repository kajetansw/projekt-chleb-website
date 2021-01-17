import React, { useState, useEffect, useContext, createContext } from 'react';

import formatUser from '@/utils/formatUser';
import { createUser } from './db';
import firebase from './firebase';
import { User } from '@/models';

interface Auth {
  user: User | null;
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
  const [user, setUser] = useState<User | null>(null);

  const signinWithFacebook = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((response) => {
        const user = formatUser(response.user!);
        const { admin, token, ...userWithoutAuthInfo } = user;

        setUser(user);
        user && createUser(userWithoutAuthInfo);
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
        setUser(formatUser(user));
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
