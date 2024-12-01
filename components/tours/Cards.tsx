import { fetchTours } from "@/services/api";
import { SearchParams } from "@/types";
import { TourCard } from "./Card";
import { Pagination } from "../pagination";

interface IProps {
  params: SearchParams | undefined;
}

export async function TourCards({ params }: IProps) {
  let localParams: Record<string, string> = {
    page: "1",
    limit: "3",
  };

  if (params?.name) {
    localParams.name = params.name;
  }
  if (params?.page) {
    localParams.page = params.page.toString();
  }

  const { data, totalCount } = await fetchTours({ params: localParams });

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-full gap-4 grid grid-cols-12 md:px-8">
        {data.data.map((tour) => (
          <TourCard {...tour} key={tour.id} />
        ))}
      </div>
      <Pagination
        total={totalCount / Number(localParams.limit)}
        initialPage={params?.page}
      />
    </div>
  );
}
