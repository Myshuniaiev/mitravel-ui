import { fetchTours } from "./services/api";
import TourList from "@/components/tours/List";
import SearchBar from "@/components/tours/Search";
import { title } from "@/components/primitives";
import { Counter } from "@/components/counter";

export default async function Dashboard() {
  const tours = await fetchTours();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Search, book, and experience&nbsp;</span>
        <span className={title({ color: "violet" })}>amazing&nbsp;</span>
        <br />
        <span className={title()}>tours all around the world.</span>
      </div>
      <SearchBar />
      <TourList tours={tours} />
      {/* TODO remove the example of the state management */}
      <Counter />
    </section>
  );
}
