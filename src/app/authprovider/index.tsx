"use client";
import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

interface user {
  name: string;
  email: string;
}

interface AuthContextValues {
  user: user | null;
  signInWithGoogle: () => Promise<void | null>;
}

const AuthContext = createContext<AuthContextValues>({
  user: null,
  signInWithGoogle: async () => null,
});

interface AuthProviderOptions {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderOptions) => {
  const [user, setUser] = useState<user | null>(null);

  const signInWithGoogle = async () => {
    return null;
  };

  const value = {
    user,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
