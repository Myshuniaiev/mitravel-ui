"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { request } from "@/services/api";
import { IUser } from "@/types";

interface AuthContextType {
  user: IUser | undefined;
  isAuthenticated: boolean;
  login: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();

    if (token && !user) {
      getMe(token);
    }
  }, [user]);

  const getMe = async (token: string) => {
    const res = await request<IUser>({
      url: "users/me",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === "success") {
      setUser(res.data?.data);
    } else {
      alert(res.message || "Login failed");
    }
  };

  const login = async (name: string, email: string, password: string) => {
    const res = await request<IUser>({
      url: "users/login",
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === "success" && res.token) {
      setCookie(null, "token", res.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setUser(res.data?.data);
      router.push("/");
    } else {
      alert(res.message || "Login failed");
    }
  };

  const logout = () => {
    destroyCookie(null, "token", { path: "/" });
    setUser(undefined);
    router.push("/sign-in");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
