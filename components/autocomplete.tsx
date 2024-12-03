"use client";

import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

interface IProps {
  startDates: Date[];
}
export default function AutocompleteComponent(props: IProps) {
  return (
    <Autocomplete label="Choose your Start Date" className="w-full">
      {props.startDates.map((item, index) => {
        const date = new Date(item);
        return (
          <AutocompleteItem key={index}>
            {date.toLocaleDateString("en-US")}
          </AutocompleteItem>
        );
      })}
    </Autocomplete>
  );
}
