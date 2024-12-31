"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { request } from "@/services/api";
import { IUser } from "@/types";

interface AuthContextType {
  user: IUser | undefined;
  isAuthenticated: boolean;
  updateMe: (data: FormData) => Promise<void>;
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

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const { token } = parseCookies();
    if (token && !user) {
      (async () => {
        try {
          await getMe(token);
        } catch (error) {
          console.error("Error fetching user:", error);
        } finally {
          setLoading(false);
        }
      })();
    } else {
      setLoading(false);
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

    if (res.status === "success" && res.data?.data) {
      setUser(res.data.data);
    } else {
      console.error(res.message || "Fetching user failed");
    }
  };

  const updateMe = async (data: FormData) => {
    setLoading(true);
    const { token } = parseCookies();

    try {
      const res = await request<IUser>({
        url: "users/updateMe",
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === "success" && res.data?.data) {
        console.log("res.data?.data: ", res.data?.data);
        setUser(res.data.data);
      } else {
        console.error(res.message || "Updating user failed");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (name: string, email: string, password: string) => {
    setLoading(true);

    try {
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
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    setLoading(true);

    try {
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
        alert(res.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    destroyCookie(null, "token", { path: "/" });
    setUser(undefined);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        updateMe,
        login,
        signup,
        logout,
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
