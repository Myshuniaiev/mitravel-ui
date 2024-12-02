"use client";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { title } from "@/components/primitives";

import { Tab, Tabs } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

export default async function ProfilePage() {
  const route = useRouter();
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!user || !isAuthenticated) {
    return route.push("/login");
  }

  return (
    <div>
      <h1 className={title()}>Profile</h1>
      <div className="flex flex-col mt-8 ">
        <Tabs aria-label="Options" isVertical={true}>
          <Tab key="music" title="Settings">
            <Card>
              <CardBody>
                <form className="flex flex-col gap-4">
                  <Input
                    type="name"
                    label="Name"
                    defaultValue={user.name}
                    className="max-w-xs"
                  />
                  <Input
                    type="email"
                    label="Email"
                    defaultValue={user.email}
                    className="max-w-xs"
                  />
                  <Input
                    isDisabled
                    type="role"
                    label="Role"
                    defaultValue={user.role}
                    className="max-w-xs"
                  />
                  <Button
                    variant="solid"
                    color="primary"
                    className="w-1/2 mt-4"
                  >
                    Update
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
