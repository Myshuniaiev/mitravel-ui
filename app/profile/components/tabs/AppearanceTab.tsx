import React from "react";
import { Divider } from "@nextui-org/divider";

export function AppearanceTab() {
  return (
    <>
      <h4 className="text-2xl mb-4">Appearance</h4>
      <Divider />
      <div className="flex flex-row gap-6 mt-4">
        <div className="flex flex-col gap-4">
          <div className="bg-gray-200 w-[260px] h-[92px] rounded-md"></div>
          <span className="text-gray-500">Light Theme</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-gray-800 w-[260px] h-[92px] rounded-md"></div>
          <span className="text-gray-500">Dark Theme</span>
        </div>
      </div>
    </>
  );
}
