import { IOptions, fetchTours } from "@/services/api";
import { SearchParams } from "@/types";
import { TourCard } from "./Card";

interface IProps {
  params: SearchParams | undefined;
}

export async function TourCards({ params }: IProps) {
  let options: IOptions = { params: {} };

  if (params?.name) {
    (options.params as Record<string, string>).name = params.name;
  }

  const tours = await fetchTours(options);

  return (
    <div className="w-full gap-4 grid grid-cols-12 md:px-8">
      {tours.map((tour) => (
        <TourCard {...tour} key={tour.id} />
      ))}
    </div>
  );
}
