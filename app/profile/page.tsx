"use client";

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Button, ButtonGroup } from "@nextui-org/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Image } from "@nextui-org/image";

export default async function ProfilePage() {
  const { user } = useContext(AuthContext);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [name, setName] = React.useState(user?.name);
  const [email, setEmail] = React.useState(user?.email);

  function handleSearch(value: string | number) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("tab", value.toString());
    } else {
      params.delete("tab");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function TourBooking() {
    return (
      <Card className="w-full">
        <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
          <Image
            removeWrapper
            alt="Acme Creators"
            className="h-auto w-full flex-none object-cover object-top md:w-48"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/hero-card-complete.jpeg"
          />
          <div className="px-4 py-3">
            <div className="w-full flex justify-between">
              <h3 className="text-large font-medium">Lorem, ipsum dolor.</h3>
              <div className="flex gap-2">
                <Button size="sm" color="default">
                  Manage
                </Button>
                <Button size="sm" color="danger">
                  Delete
                </Button>
              </div>
            </div>
            <div className="flex flex-col pt-2 text-small text-default-400">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                rem?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                voluptates nobis numquam, ullam vero libero optio. Obcaecati
                quos tempora unde?
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="flex w-full flex-col mt-4 p-2 gap-4">
      <div className="flex gap-4">
        <Avatar name={user?.name} size="lg" />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{user?.name}</span>
          <span className="text-sm text-inherit">{user?.email}</span>
        </div>
      </div>

      <Tabs
        aria-label="Options"
        isVertical
        selectedKey={searchParams.get("tab")?.toString() || "profile"}
        onSelectionChange={handleSearch}
      >
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
          <div className="flex flex-col gap-4 ">
            <h4 className="text-2xl">Booked Tours</h4>
            <Divider />
            <div className="flex flex-col gap-4">
              <TourBooking />
              <TourBooking />
              <TourBooking />
            </div>
          </div>
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
