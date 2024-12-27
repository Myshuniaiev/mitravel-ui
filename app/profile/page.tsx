"use client";

import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  FormEvent,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { Avatar } from "@nextui-org/avatar";
import { ProfileTabs } from "./components/ProfileTabs";

export default function ProfilePage() {
  const { user, updateMe } = useContext(AuthContext);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>(user?.name || "");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(user?.photoUrl || "");

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPreview(user?.photoUrl || "");
  }, [user?.name, user?.email, user?.photoUrl]);

  const handleChangeTab = (value: string | number) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("tab", value.toString());
    } else {
      params.delete("tab");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemovePhoto = () => {
    setFile(null);
    setPreview("");
  };

  const handleSaveProfile = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    // If the user selected a new file, append it
    if (file) {
      formData.append("photo", file);
    } else if (!preview) {
      // If preview is empty => user removed the photo
      // (e.g. the backend might interpret an empty "photoName" to remove the photo)
      formData.append("photoName", "");
    }

    await updateMe(formData);
  };

  return (
    <div className="flex w-full flex-col mt-4 p-2 gap-4">
      <div className="flex gap-4">
        <Avatar name={user?.name} src={user?.photoUrl} size="lg" />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{name}</span>
          <span className="text-sm text-inherit">{email}</span>
        </div>
      </div>

      <ProfileTabs
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        fileInputRef={fileInputRef}
        preview={preview}
        handleFileChange={handleFileChange}
        handleRemovePhoto={handleRemovePhoto}
        handleSaveProfile={handleSaveProfile}
        selectedTab={searchParams.get("tab")?.toString() || "profile"}
        onTabChange={handleChangeTab}
      />
    </div>
  );
}
