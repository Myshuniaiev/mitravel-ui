import React, { RefObject } from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { PublicProfileTab } from "./tabs/PublicProfileTab";
import { ToursTab } from "./tabs/ToursTab";
import { AppearanceTab } from "./tabs/AppearanceTab";
import { BillingTab } from "./tabs/BillingTab";

interface ProfileTabsProps {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  fileInputRef: RefObject<HTMLInputElement>;
  preview: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemovePhoto: () => void;
  handleSaveProfile: (e: React.FormEvent) => Promise<void>;
  selectedTab: string;
  onTabChange: (val: string | number) => void;
}

export function ProfileTabs({
  name,
  setName,
  email,
  setEmail,
  fileInputRef,
  preview,
  handleFileChange,
  handleRemovePhoto,
  handleSaveProfile,
  selectedTab,
  onTabChange,
}: ProfileTabsProps) {
  return (
    <Tabs
      aria-label="Profile Tabs"
      isVertical
      selectedKey={selectedTab}
      onSelectionChange={onTabChange}
    >
      <Tab key="profile" title="Public Profile" className="w-full px-6">
        <PublicProfileTab
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          fileInputRef={fileInputRef}
          preview={preview}
          handleFileChange={handleFileChange}
          handleRemovePhoto={handleRemovePhoto}
          handleSaveProfile={handleSaveProfile}
        />
      </Tab>

      <Tab key="tours" title="Booked Tours" className="w-full px-6">
        <ToursTab />
      </Tab>

      <Tab key="appearance" title="Appearance" className="w-full px-6">
        <AppearanceTab />
      </Tab>

      <Tab key="billing" title="Billing details" className="w-full px-6">
        <BillingTab
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />
      </Tab>
    </Tabs>
  );
}
