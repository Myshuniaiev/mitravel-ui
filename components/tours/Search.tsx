"use client";

import { Input } from "@nextui-org/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(param: "name", value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Input
      className="w-full md:w-[50%]"
      label="Search destinations"
      aria-label="Search destinations"
      onChange={(e) => handleSearch("name", e.target.value)}
      defaultValue={searchParams.get("name")?.toString()}
      // TODO create a filter modal and its functionality
      // endContent={
      //   <button
      //     className="focus:outline-none m-auto"
      //     type="button"
      //     onClick={() => {}}
      //     aria-label="toggle password visibility"
      //   >
      //     <FiltersIcon />
      //   </button>
      // }
    />
  );
}
