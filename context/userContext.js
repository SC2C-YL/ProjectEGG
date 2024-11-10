"use client"

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { redirect, useRouter } from "next/navigation";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  };

  const logout = async () => {
    await signOut(auth)
  };

  const signInWithGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {})
      .catch((err) => {})
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
    value={{ createUser, login, logout, user, signInWithGoogle }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
