"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  useEffect(() => {
    console.log("user: ", user);
  }, [user]);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBordered>
      <NavbarBrand onClick={() => router.push("/")} className="cursor-pointer">
        <Logo />
        <p className="font-bold text-inherit">Mitravel</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        {/* TODO create an auth condition for the button */}
        {isAuthenticated && user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={user.name}
                size="sm"
              />
            </DropdownTrigger>

            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                key="user"
                className="h-14 gap-2"
                href="/profile"
                textValue={user.email}
              >
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="profile" href="/profile" textValue="profile">
                Profile
              </DropdownItem>
              <DropdownItem
                key="settings"
                href="/settings"
                textValue="settings"
              >
                Settings
              </DropdownItem>
              <DropdownItem
                onClick={logout}
                key="logout"
                textValue="logout"
                color="danger"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <Button
              color="primary"
              onClick={() => router.push("/login")}
              variant="solid"
            >
              Sign in
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
};
