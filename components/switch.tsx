"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Tabs, Tab } from "@nextui-org/tabs";
import React from "react";

interface IUser {
  name?: string;
}

export default function Switch(props: IUser) {
    const isVertical = true;
  return (
      <div className="flex flex-col mt-8 ">
        <Tabs aria-label="Options" isVertical={isVertical}>
          <Tab key="music" title="Settings">
            <Card>
              <CardBody>
              <form className="flex flex-col gap-4">
                <Input
                  type="name"
                  label="Name"
                  defaultValue={props.name}
                  className="max-w-xs"
                />
                  <Input
                  type="email"
                  label="Email"
                  defaultValue={props.email}
                  className="max-w-xs"
                />
                  <Input
                  type="password"
                  label="Password"
                  defaultValue={props.password}
                  className="max-w-xs"
                />
                  <Input
                  type="role"
                  label="Role"
                  defaultValue={props.role}
                  className="max-w-xs"
                />
                </form>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
  );
}
