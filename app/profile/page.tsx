"use client";

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button, ButtonGroup } from "@nextui-org/button";

export default async function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [name, setName] = React.useState(user?.name);
  const [email, setEmail] = React.useState(user?.email);

  return (
    <div className="flex w-full flex-col mt-4 p-2 gap-4">
      <div className="flex gap-4">
        <Avatar name={user?.name} size="lg" />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{user?.name}</span>
          <span className="text-sm text-inherit">{user?.email}</span>
        </div>
      </div>

      <Tabs aria-label="Options" isVertical>
        <Tab key="profile" title="Public Profile" className="w-full px-6">
          <div className="flex flex-col gap-4 ">
            <h4 className="text-2xl">Public profile</h4>
            <Divider />
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 flex flex-col gap-6 w-full">
                <Input
                  labelPlacement="outside"
                  placeholder="Enter your Name"
                  type="name"
                  label="Name"
                  className="w-96"
                  value={name}
                  onValueChange={setName}
                  description={
                    "Your name will be displayed on the booking lists. Only guides and users are able to see your name."
                  }
                />
                <Input
                  labelPlacement="outside"
                  placeholder="Enter your email address"
                  type="email"
                  label="Email address"
                  className="w-96"
                  value={email}
                  onValueChange={setEmail}
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <span className="text-sm font-bold">Profile picture</span>
                <Avatar
                  name={user?.name}
                  className="relative w-[200px] h-[200px] "
                />
                <ButtonGroup size="sm" className="mr-auto">
                  <Button>Upload</Button>
                  <Button>Remove</Button>
                </ButtonGroup>
              </div>
            </div>
            <Button
              className="w-fit text-white mt-2"
              variant="solid"
              color="primary"
            >
              Update Profile
            </Button>
          </div>
        </Tab>
        <Tab key="tours" title="Booked Tours" className="w-full px-6">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="appearance" title="Appearance" className="w-full px-6">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="billing" title="Billing details" className="w-full px-6">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sed
              enim minima ab rem repellat velit aspernatur, voluptatibus, dicta,
              praesentium reprehenderit labore eveniet ipsa! Optio expedita
              sapiente earum ipsa voluptate?
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
