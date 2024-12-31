import { Greetings } from "@/components/greetings";
import { TourCards } from "@/app/tours/components/Cards";
import SearchBar from "@/app/tours/components/Search";
import { SearchParams } from "@/types";

export default async function Dashboard(props: {
  searchParams?: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-10 px-8">
      <Greetings />
      <SearchBar />
      <TourCards params={searchParams} />
    </section>
  );
}
