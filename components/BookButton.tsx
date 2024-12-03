"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";


interface IProps{
  title: string;
  link: string;
}

export default function BookButton(props: IProps) {
  const router = useRouter();
  return (
    <Button variant="solid" color="primary" className="w-full mt-4" onClick={() => router.push(props.link)}>
      {props.title}
    </Button>
  );
}
