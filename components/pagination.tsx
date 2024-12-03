"use client";

import { Pagination as NextUiPagination } from "@nextui-org/pagination";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface IProps {
  total: number;
  initialPage: number | undefined;
}

export const Pagination = ({ total, initialPage }: IProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChangePage(value: number) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("page", value.toString());
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <NextUiPagination
      initialPage={initialPage || 1}
      total={total}
      onChange={handleChangePage}
    />
  );
};
