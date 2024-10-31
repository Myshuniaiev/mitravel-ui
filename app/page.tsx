import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { fetchTours } from "./services/api";
import { ITour } from "@/types";
import TourList from "@/components/tours/List";
import SearchBar from "@/components/tours/Search";

export default async function Dashboard() {
  const tours: ITour[] = await fetchTours();

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
    </section>
  );
}
