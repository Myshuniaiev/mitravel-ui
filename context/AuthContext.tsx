"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { request } from "@/services/api";
import { IUser } from "@/types";

interface AuthContextType {
  user: IUser | undefined;
  isAuthenticated: boolean;
  updateMe: (name: string, email: string) => Promise<void>;
  login: (name: string, email: string, password: string) => Promise<void>;
  signup: (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isAuthenticated: false,
  updateMe: async () => {},
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();

    // If there's a token, attempt to fetch the user
    if (token && !user) {
      getMe(token);
    } else {
      setLoading(false);
    }
  }, [user]);

  const getMe = async (token: string) => {
    try {
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
        console.error(res.message || "Fetching user failed");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false); // Ensure loading is turned off after attempt
    }
  };

  const updateMe = async (name: string, email: string) => {
    setLoading(true);

    const { token } = parseCookies();

    const res = await request<IUser>({
      url: "users/updateMe",
      method: "PATCH",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setLoading(false);
  };

  const login = async (name: string, email: string, password: string) => {
    setLoading(true);

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

    setLoading(false);
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    const res = await request<IUser>({
      url: "users/signup",
      method: "POST",
      body: JSON.stringify({ name, email, password, passwordConfirm }),
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
    router.push("/login");
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, updateMe, login, signup, logout }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
