import React, { RefObject, FormEvent } from "react";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";

interface PublicProfileTabProps {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  fileInputRef: RefObject<HTMLInputElement>;
  preview: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemovePhoto: () => void;
  handleSaveProfile: (e: FormEvent) => Promise<void>;
}

export function PublicProfileTab({
  name,
  setName,
  email,
  setEmail,
  fileInputRef,
  preview,
  handleFileChange,
  handleRemovePhoto,
  handleSaveProfile,
}: PublicProfileTabProps) {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSaveProfile}>
      <h4 className="text-2xl">Public profile</h4>
      <Divider />
      <div className="grid grid-cols-3 gap-4">
        <div className="w-[400px] flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            <span className="text-sm font-bold">Profile picture</span>
            <Avatar
              name={name}
              src={preview}
              className="relative w-[200px] h-[200px] text-lg"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Upload
            </Button>
            <input
              id="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              type="file"
              accept="image/*"
              hidden
            />
            <Button color="danger" onClick={handleRemovePhoto}>
              Remove
            </Button>
          </div>
          <Input
            labelPlacement="outside"
            placeholder="Enter your Name"
            type="text"
            label="Name"
            className="w-96"
            value={name}
            onValueChange={setName}
            description="Your name will be displayed on the booking lists. Only guides and users see your name."
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
      </div>
      <Button variant="solid" color="primary" type="submit" className="w-1/5">
        Update Profile
      </Button>
    </form>
  );
}
