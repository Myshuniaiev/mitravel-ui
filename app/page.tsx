import { TourCards } from "@/components/tours/Cards";
import SearchBar from "@/components/tours/Search";
import { SearchParams } from "@/types";

export default async function Dashboard(props: {
  searchParams?: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <SearchBar />
      <TourCards params={searchParams} />
    </section>
  );
}
