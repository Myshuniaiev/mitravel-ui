"use client";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { subtitle, title } from "@/components/primitives";

export default function DashboardPage() {
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h1 className={title()}>Welcome {user?.name}!</h1>
      <h4 className={subtitle()}>
        You are {isAuthenticated ? "" : "not "}Authenticated
      </h4>
    </div>
  );
}
