import { request } from "@/services/api";
import { ITour, SearchParams } from "@/types";
import { TourCard } from "./Card";
import { Pagination } from "../pagination";

interface IProps {
  params: SearchParams | undefined;
}

export async function TourCards({ params }: IProps) {
  let localParams: Record<string, string> = {
    page: "1",
    limit: "6",
    fields:
      "name,ratingsAverage,ratingQuantity,startLocation,priceDiscount,price",
  };

  if (params?.name) {
    localParams.name = params.name;
  }
  if (params?.page) {
    localParams.page = params.page.toString();
  }

  const {
    data: res,
    totalCount = 0,
    results = 0,
  } = await request<ITour[]>({
    url: "tours",
    params: localParams,
  });

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-full gap-4 grid grid-cols-12 md:px-8">
        {res?.data.map((tour) => <TourCard {...tour} key={tour.id} />)}
      </div>
      {results < Number(localParams.limit) &&
      Number(localParams.page) == 1 ? null : (
        <Pagination
          total={Math.ceil(totalCount / Number(localParams.limit))}
          initialPage={Number(localParams.page)}
        />
      )}
    </div>
  );
}
