import React from "react";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

interface BillingTabProps {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
}

export function BillingTab({
  name,
  setName,
  email,
  setEmail,
}: BillingTabProps) {
  return (
    <>
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
    </>
  );
}
