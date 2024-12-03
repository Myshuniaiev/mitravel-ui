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
            <Button variant="solid" color="primary" className="w-1/5">
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
          <h4 className="text-2xl mb-4">Appearance</h4>
          <Divider />
          <div className="flex flex-row gap-6 mt-4">
            <div className="flex flex-col gap-4">
              <svg
                width="260"
                height="92"
                viewBox="0 0 260 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="260" height="92" rx="6" fill="#E2E8F0" />
                <mask id="path-2-inside-1_2231_20292" fill="white">
                  <path d="M40 26C40 22.6863 42.6863 20 46 20H258V84C258 87.3137 255.314 90 252 90H40V26Z" />
                </mask>
                <path
                  d="M40 26C40 22.6863 42.6863 20 46 20H258V84C258 87.3137 255.314 90 252 90H40V26Z"
                  fill="white"
                />
                <path
                  d="M39 26C39 22.134 42.134 19 46 19H258V21H46C43.2386 21 41 23.2386 41 26H39ZM258 90H40H258ZM39 90V26C39 22.134 42.134 19 46 19V21C43.2386 21 41 23.2386 41 26V90H39ZM258 20V90V20Z"
                  fill="#D1D5DB"
                  mask="url(#path-2-inside-1_2231_20292)"
                />
              </svg>
              <span className="text-gray-500">Light Theme</span>
            </div>
            <div className="flex flex-col gap-4">
              <svg
                width="260"
                height="91"
                viewBox="0 0 260 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="259"
                  height="90"
                  rx="5.5"
                  fill="#373636"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="259"
                  height="90"
                  rx="5.5"
                  stroke="#D1D5DB"
                />
                <mask id="path-2-inside-1_2231_21602" fill="white">
                  <path d="M40 26C40 22.6863 42.6863 20 46 20H259V84C259 87.3137 256.314 90 253 90H40V26Z" />
                </mask>
                <path
                  d="M40 26C40 22.6863 42.6863 20 46 20H259V84C259 87.3137 256.314 90 253 90H40V26Z"
                  fill="#171414"
                />
                <path
                  d="M39 26C39 22.134 42.134 19 46 19H259V21H46C43.2386 21 41 23.2386 41 26H39ZM259 90H40H259ZM39 90V26C39 22.134 42.134 19 46 19V21C43.2386 21 41 23.2386 41 26V90H39ZM259 20V90V20Z"
                  fill="#4B5563"
                  mask="url(#path-2-inside-1_2231_21602)"
                />
              </svg>
              <span className="text-gray-500">Dark Theme</span>
            </div>
          </div>
        </Tab>
        <Tab key="billing" title="Billing details" className="w-full px-6">
          {/* Billing Section */}
          <h4 className="text-2xl mb-4">Billing Details</h4>
          <Divider />
          <div className="mt-4">
          <h3 className="font-semibold mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input
                labelPlacement="outside"
                placeholder="Enter your full name"
                type="text"
                label="Full Name"
                className="w-full"
                value={name}
                onValueChange={setName}
              />
               <Input
                labelPlacement="outside"
                placeholder="Enter your email address"
                type="text"
                label="Email Address"
                className="w-full"
                value={email}
                onValueChange={setEmail}
              />
              <Input
                labelPlacement="outside"
                placeholder="Enter your address"
                type="text"
                label="Address"
                className="w-full"
              />
              <Input
                labelPlacement="outside"
                placeholder="Enter your city"
                type="text"
                label="City"
                className="w-full"
              />
               <Input
                labelPlacement="outside"
                placeholder="Enter your country"
                type="text"
                label="Country"
                className="w-full"
              />
              <Input
                labelPlacement="outside"
                placeholder="Enter your postal code"
                type="text"
                label="Postal Code"
                className="w-full"
              />
            </div>
            <Divider className="w-full" />
            <h3 className="font-semibold mb-4 mt-4">Credit Card Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                labelPlacement="outside"
                placeholder="Enter cardholder name"
                type="text"
                label="Cardholder Name"
                className="w-full"
              />
              <Input
                labelPlacement="outside"
                placeholder="Enter card number"
                type="text"
                label="Card Number"
                className="w-full"
              />
              <Input
                labelPlacement="outside"
                placeholder="MM/YY"
                type="text"
                label="Expiration Date"
                className="w-full"
              />
              <Input
                labelPlacement="outside"
                placeholder="Enter CVV"
                type="text"
                label="CVV"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <Button variant="solid" color="primary" className="w-1/5">
              Save Details
            </Button>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
